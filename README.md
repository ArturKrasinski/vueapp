Czêœæ 1: VUE - przyk³adowa aplikacja
(architektura aplikacji, problem zagnie¿d¿ania zdarzeñ)

1. stworzenie projektu firebase, konfiguracja z vue cli, pobranie danych i wyœwietlenie (~1h)
   1. za³o¿enie projektu w firebase
   2. import danych z json do firebase
   3. zaci¹gniêcie czystego projektu (przygotowanego wczeœniej w git)
   4. import configu do projektu
   5. nawi¹zanie po³¹czenia z baz¹
   6. wyœwietlanie pobieranych danych
2. wyœwietlenie komponentu tabeli gdzie bêd¹ v-for’y wyœwietlaj¹ce ca³oœæ danych (~0,5)
   1. stworzenie komponentu tabeli i zaimportowanie go do g³ównego komponentu
   2. pobranie danych w g³ównym komponencie i przekazanie go do komponentu tabeli
   3. wrzucenie paczki ze stylami (sass) do komponentu tabeli 
3. wyodrêbnienie komponentu table product (0,5) 
   1. stworzenie nowego komponentu “table product”
   2. zaimportowanie komponentu do komponentu tabeli
4. w komponencie table product wyodrêbnienie child komponentów: image, price, title, availability, buttons (1)
   1. przygotowanie plików ma³ych komponentów
   2. zaimportowanie ich do komponentu produktu
   3. obs³u¿enie ró¿nych stanów dla komponentu price i availability
      1. stany price: zwykla, special, special z przekreslona cena
      2. stany availability: dostepny, niedostepny, na zamówienie
5. podzielenie button na dwa oddzielne buttony i obs³u¿enie eventu (0,5)
   1. stworzenie komponentu button dodaj do koszyka
      1. stworzenie przycisku
      2. stworzenie inputa (qty)
      3. obs³u¿enie emitowania zdarzenia z klikniêciem przycisku dodaj do koszyka
   1. stworzenie komponentu button dodaj do wishlisty
      1. przygotowanie html przycisku
      2. obs³u¿enie emitowania zdarzenia klikniêcia przycisku
   1. import child komponentów do g³ównego komponentu buttons
   2. obs³u¿enie reakcji na zdarzenia emitowane z child buttonów
6. dodanie funkcjonalnoœci wyœwietlania listy koszyka / listy ¿yczeñ (podstawowe czyli tytu³ produktu i label listy) (0,5)
   1. przygotowanie komponentów
   2. import do g³ównego modu³u
   3. aktualizacja list w zale¿noœci na klikniêcia w przyciski
      1. wyœwietlanie produktów dodanych do konkretnej listy


Czêœæ 2: VUEX
(teoria / prezentacja + wdro¿enie)
1. Teoria na temat VUEX (1)
2. Podpiêcie VUEX do projektu (1)
   1. instalacja modu³u node
   2. import do g³ównego modu³u
3. Przygotowanie metod (1)
   1. obs³u¿enie dodaj / usuñ itemu z kolekcji + pobranie ca³ej kolekcji koszyka
   2. obs³u¿enie dodaj / usuñ itemu z kolekcji + pobranie ca³ej kolekcji wishlisty
4. Wyœwietlanie wszystkich danych na podstawie globalnego store