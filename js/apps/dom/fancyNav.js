/*
* FancyNavigator:
* 1. w momencie gdy uzytkownik przesunie scrollbarem strony w dol/gore animujemy
*   zmieniamy backgroundColor el ".js-menu" na kolor pomiedzy #f00, a #0f0 o procent
*   o jaki przesunal scroll bar (np jesli strona ma 1000px wysokosci, a scrollbar przesunieto
*   o 300px, to kolor powinien byc === 0.7 * #f00 + 0.3 * #0f0
* 2. zaprogramowac obsluge zdarzenia 'scrollend'
* 3. na zdarznie 'scroll end' uruchomic animacje, trwajaca 1200ms, ktora zjedzie elementem
*   ".js-indicator" wzgledem el ".js-menu" o % o jaki przesunieto scrollbar
* */
