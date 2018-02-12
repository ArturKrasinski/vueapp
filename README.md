Cz�� 1: VUE - przyk�adowa aplikacja
(architektura aplikacji, problem zagnie�d�ania zdarze�)

1. stworzenie projektu firebase, konfiguracja z vue cli, pobranie danych i wy�wietlenie (~1h)
   1. za�o�enie projektu w firebase
   2. import danych z json do firebase
   3. zaci�gni�cie czystego projektu (przygotowanego wcze�niej w git)
   4. import configu do projektu
   5. nawi�zanie po��czenia z baz�
   6. wy�wietlanie pobieranych danych
2. wy�wietlenie komponentu tabeli gdzie b�d� v-for�y wy�wietlaj�ce ca�o�� danych (~0,5)
   1. stworzenie komponentu tabeli i zaimportowanie go do g��wnego komponentu
   2. pobranie danych w g��wnym komponencie i przekazanie go do komponentu tabeli
   3. wrzucenie paczki ze stylami (sass) do komponentu tabeli 
3. wyodr�bnienie komponentu table product (0,5) 
   1. stworzenie nowego komponentu �table product�
   2. zaimportowanie komponentu do komponentu tabeli
4. w komponencie table product wyodr�bnienie child komponent�w: image, price, title, availability, buttons (1)
   1. przygotowanie plik�w ma�ych komponent�w
   2. zaimportowanie ich do komponentu produktu
   3. obs�u�enie r�nych stan�w dla komponentu price i availability
      1. stany price: zwykla, special, special z przekreslona cena
      2. stany availability: dostepny, niedostepny, na zam�wienie
5. podzielenie button na dwa oddzielne buttony i obs�u�enie eventu (0,5)
   1. stworzenie komponentu button dodaj do koszyka
      1. stworzenie przycisku
      2. stworzenie inputa (qty)
      3. obs�u�enie emitowania zdarzenia z klikni�ciem przycisku dodaj do koszyka
   1. stworzenie komponentu button dodaj do wishlisty
      1. przygotowanie html przycisku
      2. obs�u�enie emitowania zdarzenia klikni�cia przycisku
   1. import child komponent�w do g��wnego komponentu buttons
   2. obs�u�enie reakcji na zdarzenia emitowane z child button�w
6. dodanie funkcjonalno�ci wy�wietlania listy koszyka / listy �ycze� (podstawowe czyli tytu� produktu i label listy) (0,5)
   1. przygotowanie komponent�w
   2. import do g��wnego modu�u
   3. aktualizacja list w zale�no�ci na klikni�cia w przyciski
      1. wy�wietlanie produkt�w dodanych do konkretnej listy


Cz�� 2: VUEX
(teoria / prezentacja + wdro�enie)
1. Teoria na temat VUEX (1)
2. Podpi�cie VUEX do projektu (1)
   1. instalacja modu�u node
   2. import do g��wnego modu�u
3. Przygotowanie metod (1)
   1. obs�u�enie dodaj / usu� itemu z kolekcji + pobranie ca�ej kolekcji koszyka
   2. obs�u�enie dodaj / usu� itemu z kolekcji + pobranie ca�ej kolekcji wishlisty
4. Wy�wietlanie wszystkich danych na podstawie globalnego store