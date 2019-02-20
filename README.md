# myWeatherApp
REACT, CSS
Yksinkertainen sovellus ajantaisaisten säätietojen hakemiseen ja suosikkien tallentamiseen. Appi käyttää openweathermapsin api-rajapintaa. 

# toiminnallisuus
- käyttäjä voi hakea haluamansa kaupungin sään
- käyttäjä voi tallentaa haluamansa kaupungin suosikkeihin erillisen formin kautta (istunnon ajaksi, ei tallenna tietokantaan)
- suosikkia painamalla appi hakee kyseisen kaupungin sään
- käyttäjä voi poistaa haluamansa kaupungin suosikeista

# testaus
- appissa voi ajaa muutaman hyvin yksinkertaisen testin

# myWeatherApp.2
Rajasin appin tekemisen yhden työpäivän tunteihin. Seuraavaan vaiheeseen jatkokehittäisin seuraavia osia:
- Lisää suosikiksi tekstikentän validointi (nyt showFavoriteWeather-funktio hyväksyy minkä tahansa syötetyn arvon)
- showFavoriteWeather- ja getWeather funktioiden yhdistäminen yhtenäisen toiminnallisuuden osalta (api-haku)
- Hae sää -tekstikenttä toimisi teksti-/hakukenttänä ja syöttämällä ensimmäisen kirjaimen, appi hakisi rajapinnasta hakuehdot täyttävät   
  kaupungit ja näyttäisi tulokset alasvetovalikkona (näppäilyvirheiden vähentäminen)
- Lisää suosikki -napin sijainti joko
        A) säätietojen jälkeen näytettäväksi (jolloin appi voisi tarkistaa, onko kaupunki jo käyttäjän suosikeissa >> tässä tapauksessa
        näkyisikin poista suosikeista -painike)
        B) tai vaihtoehtoisesti Hae sää -napin yhteyteen, jolloin jos käyttäjä haluaa vain tallentaa uuden suosikin, onnistuu tämä nopeasti
- Lisäksi pienempinä muokkauksina lisäisin appin reagointia käyttäjän toimintaan (tekstikentän placeholder poistetaan, virheilmoitus tai näytetty säätieto häviää,kun käyttäjä klikkaa tekstiruutua)









