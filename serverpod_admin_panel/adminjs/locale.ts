import { CurrentAdmin, Locale, LocaleTranslations } from "adminjs";

export const locale:
  | Locale
  | ((admin?: CurrentAdmin) => Locale | Promise<Locale>) = {
  language: "en",
  translations: {
    en: {
      components: {
        Login: {
          welcomeHeader: "Elo żelo!",
          welcomeMessage:
            "Witamy w panelu administracyjnym Formularza Snu Solvro",
        },
      },
      labels: {
        participants: "Uczestnicy badania",
        form_entries: "Odpowiedzi na formularz",
        global_config: "Czas trwania badania",
      },
      actions: {
        new: "Stwórz nowy",
        edit: "Edytuj",
        show: "Szczegóły",
        delete: "Usuń",
        list: "Lista",
        filter: "Filtruj",
        filters: "Filtry",
      },
      buttons: {
        save: "Zapisz",
        confirmRemovalMany_1: "Potwierdź usunięcie {{count}} rekordu",
        confirmRemovalMany_2: "Potwierdź usunięcie {{count}} rekordów",
        applyChanges: "Zastosuj zmiany",
        reset: "Resetuj",
        filter: "Filtruj",
        logOut: "Wyloguj się",
        createFirstRecord: "Stwórz pierwszy rekord",
      },
      properties: {
        id: "ID",
        name: "Imię i nazwisko",
        email: "Email",
        researchStartDate: "Data rozpoczęcia badania",
        researchEndDate: "Data zakończenia badania",
        inBedStartTime: "Czas położenia się do łóżka",
        fallingAsleepTime: "Czas zaśnięcia",
        midNightAwaikingsCount: "Liczba przebudzeń w nocy",
        totalMidNightAwaikingsTime: "Całkowity czas przebudzeń w nocy",
        wakeUpTime: "Czas obudzenia się",
        outBedTime: "Czas wyjścia z łóżka",
        timestamp: "Czas wysłania odpowiedzi",
        participantId: "Uczestnik badania",
      },
    } as LocaleTranslations,
  },
};
