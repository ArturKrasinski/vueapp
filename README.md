Część 1: VUE - przykładowa aplikacja
(architektura aplikacji, problem zagnieżdżania zdarzeń)

1. stworzenie projektu firebase, konfiguracja z vue cli, pobranie danych i wyświetlenie (~1h)
   1. założenie projektu w firebase
   2. import danych z json do firebase
   3. zaciągnięcie czystego projektu (przygotowanego wcześniej w git)
   4. import configu do projektu
   5. nawiązanie połączenia z bazą
   6. wyświetlanie pobieranych danych
2. wyświetlenie komponentu tabeli gdzie będą v-for’y wyświetlające całość danych (~0,5)
   1. stworzenie komponentu tabeli i zaimportowanie go do głównego komponentu
   2. pobranie danych w głównym komponencie i przekazanie go do komponentu tabeli
   3. wrzucenie paczki ze stylami (sass) do komponentu tabeli
3. wyodrębnienie komponentu table product (0,5)
   1. stworzenie nowego komponentu “table product”
   2. zaimportowanie komponentu do komponentu tabeli
4. w komponencie table product wyodrębnienie child komponentów: image, price, title, availability, buttons (1)
   1. przygotowanie plików małych komponentów
   2. zaimportowanie ich do komponentu produktu
   3. obsłużenie różnych stanów dla komponentu price i availability
      1. stany price: zwykla, special, special z przekreslona cena
      2. stany availability: dostepny, niedostepny, na zamówienie
5. podzielenie button na dwa oddzielne buttony i obsłużenie eventu (0,5)
   1. stworzenie komponentu button dodaj do koszyka
      1. stworzenie przycisku
      2. stworzenie inputa (qty)
      3. obsłużenie emitowania zdarzenia z kliknięciem przycisku dodaj do koszyka
   1. stworzenie komponentu button dodaj do wishlisty
      1. przygotowanie html przycisku
      2. obsłużenie emitowania zdarzenia kliknięcia przycisku
   1. import child komponentów do głównego komponentu buttons
   2. obsłużenie reakcji na zdarzenia emitowane z child buttonów
6. dodanie funkcjonalności wyświetlania listy koszyka / listy życzeń (podstawowe czyli tytuł produktu i label listy) (0,5)
   1. przygotowanie komponentów
   2. import do głównego modułu
   3. aktualizacja list w zależności na kliknięcia w przyciski
      1. wyświetlanie produktów dodanych do konkretnej listy


Część 2: VUEX
(teoria / prezentacja + wdrożenie)
1. Teoria na temat VUEX (1)
2. Podpięcie VUEX do projektu (1)
   1. instalacja modułu node
   2. import do głównego modułu
3. Przygotowanie metod (1)
   1. obsłużenie dodaj / usuń itemu z kolekcji + pobranie całej kolekcji koszyka
   2. obsłużenie dodaj / usuń itemu z kolekcji + pobranie całej kolekcji wishlisty
4. Wyświetlanie wszystkich danych na podstawie globalnego store
