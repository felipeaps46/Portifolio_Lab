import type { CardType } from "./cardType"

export type ProjectModalType = {
    open: boolean,
    handleClose: () => void,
    project: CardType
}