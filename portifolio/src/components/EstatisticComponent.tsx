import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from 'framer-motion';

import { Box, Card, Typography, LinearProgress } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const CountUpNumber: React.FC<{ value: number; duration?: number; decimals?: number }> = ({
  value,
  duration = 1.5,
  decimals = 0,
}) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: 'easeOut' });
    return () => controls.stop();
  }, [value, duration, count]);

  useMotionValueEvent(count, 'change', (latest) => {
    setDisplay(Number(latest.toFixed(decimals)));
  });

  return <>{display.toLocaleString()}</>;
};

type StatItemProps = {
  icon?: React.ReactNode;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  plus?: boolean;
  decimals?: number;
  duration?: number;
  start?: boolean;
};

const StatItem: React.FC<StatItemProps> = ({
  icon,
  label,
  value,
  prefix = '',
  suffix = '',
  plus = false,
  decimals = 0,
  duration,
  start = false,
}) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      {icon && <Box sx={{ mb: 1 }}>{icon}</Box>}
      <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: "24px", sm: "34px" } }}>
        {prefix}
        {start ? (
          <CountUpNumber value={value} duration={duration} decimals={decimals} />
        ) : (
          0
        )}
        {plus && '+'}
        {suffix}
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.7 }}>
        {label}
      </Typography>
    </Box>
  );
};

type StatsPanelProps = {
  title?: string;
  items: Array<StatItemProps>;
  satisfaction?: number;
  satisfactionLabel?: string;
};

export const StatsPanel: React.FC<StatsPanelProps> = ({
  title = 'ESTATÍSTICAS',
  items,
  satisfaction,
  satisfactionLabel = 'Satisfação do Cliente',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const progress = useMotionValue(0);
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    if (inView && typeof satisfaction === 'number') {
      const controls = animate(progress, satisfaction, { duration: 1, ease: 'easeOut' });
      return () => controls.stop();
    }
  }, [inView, satisfaction, progress]);
  useMotionValueEvent(progress, 'change', (v) => setProgressValue(v));

  return (
    <Card
      ref={ref}
      elevation={0}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 4,
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)',
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 4px 12px rgba(25,118,210,0.25)",
        color: "#fff",
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            bgcolor: 'rgba(255,255,255,0.08)',
          }}
        >
          <TrendingUpIcon />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          {title}
        </Typography>
      </Box>

      <motion.div
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", gap: 2.5 }}>
          {items.map((it, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: 'calc(50% - 10px)', sm: 'calc(25% - 15px)' },
                minWidth: { xs: 100, sm: 140 },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.02,
                    },
                  },
                }}
              >
                <StatItem {...it} start={inView} />
              </motion.div>
            </Box>
          ))}
        </Box>
      </motion.div>

      {typeof satisfaction === 'number' && (
        <Box sx={{ mt: 3.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {satisfactionLabel}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {Math.round(progressValue)}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progressValue}
            sx={{
              height: 10,
              borderRadius: 5,
              bgcolor: 'rgba(255,255,255,0.1)',
              '& .MuiLinearProgress-bar': { borderRadius: 5, bgcolor: '#ffffff' },
            }}
          />
        </Box>
      )}
    </Card>
  );
};