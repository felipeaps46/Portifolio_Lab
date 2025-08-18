const changeLanguage = (lang: string) => {
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
    }
};

export default function LanguageSwitcher() {
    return (
        <div>
            <button onClick={() => changeLanguage("pt")}>🇧🇷 Português</button>
            <button onClick={() => changeLanguage("en")}>🇺🇸 Inglês</button>
        </div>
    );
}