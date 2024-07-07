// Po načítaní celej stránky
document.addEventListener("DOMContentLoaded", function () {
    // Dummy Data pre inicializáciu údajov
    const dummyData = {
      articles: [
        {
          title:
            "SHMÚ vydáva výstrahy pre takmer celé Slovensko. Bude aj -20 °C, toto sú predikcie na nasledujúce dni (PREDPOVEĎ)",
          readers: getRandomNumber(),
          image: "img/pocasie.png",
        },
        {
          title:
            "Kuchár Jožko je syn krutého vraha. V roku 1980 bol za svoje činy odsúdený na trest smrti",
          readers: getRandomNumber(),
          image: "img/kucharJozko.jpg",
        },
        {
          title:
            "Vážna nehoda na D1 má dohru, mladý Bulhar za zdemolovanie pumpy putuje do väzby",
          readers: getRandomNumber(),
          image: "img/autonehoda.jpeg",
        },
        {
          title:
            "Poznáme TOP 10 krajín pre prácu na diaľku. Slovensko v rebríčku nečakane zahviezdilo",
          readers: getRandomNumber(),
          image: "img/homeoffice.jpg",
        },
        {
          title: "Na cestu v okrese Žilina sa zosunula pôda. Úsek je neprejazdný",
          readers: getRandomNumber(),
          image: "img/zosuvpody.jpg",
        },
      ],
      realtimeUsers: getRandomNumber(),
      facebookLikes: getRandomNumber(),
      instagramFollows: getRandomNumber(),
      youtubeSubs: getRandomNumber(),
    };
  
    // Zobrazenie Dummy Data
    displayArticles(dummyData.articles);
    document.getElementById("realtimeUsers").textContent =
      dummyData.realtimeUsers;
    updateTotalNumber(dummyData.articles);
    document.getElementById("facebookLikes").textContent =
      dummyData.facebookLikes;
    document.getElementById("instagramFollows").textContent =
      dummyData.instagramFollows;
    document.getElementById("youtubeSubs").textContent = dummyData.youtubeSubs;
  
    // Nastavenie automatického obnovenia
    let autoRefreshInterval;
    const toggleAutoRefreshBtn = document.getElementById("toggleAutoRefresh");
  
    toggleAutoRefreshBtn.addEventListener("click", function () {
      if (autoRefreshInterval) {
        clearInterval(autoRefreshInterval);
        autoRefreshInterval = null;
        toggleAutoRefreshBtn.textContent = "Spustit";
      } else {
        autoRefreshInterval = setInterval(updateData, 20000);
        toggleAutoRefreshBtn.textContent = "Zastavit";
      }
    });
  
    // Inicializácia automatického obnovenia
    autoRefreshInterval = setInterval(updateData, 20000);
  });
  
  // Funkcia na zobrazenie článkov v zozname
  function displayArticles(articles) {
   // Zoradiť články podľa čitateľov zostupne
   articles.sort((a, b) => b.readers - a.readers);
  
   const articlesContainer = document.getElementById("articles");
   articlesContainer.innerHTML = "";
  
   articles.forEach((article) => {
     const articleElement = document.createElement("li");
     articleElement.classList.add("article"); // Pridajte triedu pre flexbox
  
     // Prvý element pre obrázok článku
     const imageElement = document.createElement("img");
     imageElement.src = article.image;
     imageElement.alt = article.title;
     imageElement.classList.add("article-image");
     articleElement.appendChild(imageElement);
  
     // Druhý element pre obsah článku
     const contentElement = document.createElement("div");
     contentElement.classList.add("article-content");
  
     // Pridajte oranžový rámček a bielu farbu iba pre čísla čitateľov
     const readersNumber = document.createElement("span");
     readersNumber.textContent = article.readers;
     readersNumber.style.border = "2px solid #ff8500"; // Oranžový rámček pre číslo čitateľov
     readersNumber.style.backgroundColor = "#ff8500"; // Oranžové pozadie pre číslo čitateľov
     readersNumber.style.color = "white"; // Biely text pre číslo čitateľov
     readersNumber.style.padding = "8px 12px"; // Väčší padding
     readersNumber.style.borderRadius = "8px"; // Zaoblenie rohov
  
     // Štvrtý element pre titulok článku
     const titleElement = document.createElement("p");
     titleElement.classList.add("title"); // Pridajte triedu pre titulok
     titleElement.textContent = ` ${article.title}`;
     titleElement.prepend(readersNumber);
  
     // Pridanie elementov do obsahu článku
     contentElement.appendChild(titleElement);
     articleElement.appendChild(contentElement);
     articlesContainer.appendChild(articleElement);
   });
  }
  
  // Funkcia na aktualizáciu celkového počtu čitateľov
  function updateTotalNumber(articles) {
    const totalNumber = articles.reduce(
      (sum, article) => sum + article.readers,
      0
    );
    document.getElementById("totalNumber").textContent = totalNumber;
  }
  
  // Funkcia na generovanie náhodného čísla
  function getRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
  }
  
  // Funkcia pre aktualizáciu dát (napr. pri automatickom obnovení)
  function updateData() {
    const dummyData = {
      articles: [
        {
          title:
            "SHMÚ vydáva výstrahy pre takmer celé Slovensko. Bude aj -20 °C, toto sú predikcie na nasledujúce dni (PREDPOVEĎ)",
          readers: getRandomNumber(),
          image: "img/pocasie.png",
        },
        {
          title:
            "Kuchár Jožko je syn krutého vraha. V roku 1980 bol za svoje činy odsúdený na trest smrti",
          readers: getRandomNumber(),
          image: "img/kucharJozko.jpg",
        },
        {
          title:
            "Vážna nehoda na D1 má dohru, mladý Bulhar za zdemolovanie pumpy putuje do väzby",
          readers: getRandomNumber(),
          image: "img/autonehoda.jpeg",
        },
        {
          title:
            "Poznáme TOP 10 krajín pre prácu na diaľku. Slovensko v rebríčku nečakane zahviezdilo",
          readers: getRandomNumber(),
          image: "img/homeoffice.jpg",
        },
        {
          title: "Na cestu v okrese Žilina sa zosunula pôda. Úsek je neprejazdný",
          readers: getRandomNumber(),
          image: "img/zosuvpody.jpg",
        },
      ],
      realtimeUsers: getRandomNumber(),
      facebookLikes: getRandomNumber(),
      instagramFollows: getRandomNumber(),
      youtubeSubs: getRandomNumber(),
    };
  
    // Zobrazenie nových dát
    displayArticles(dummyData.articles);
    document.getElementById("realtimeUsers").textContent =
      dummyData.realtimeUsers;
    updateTotalNumber(dummyData.articles);
    document.getElementById("facebookLikes").textContent =
      dummyData.facebookLikes;
    document.getElementById("instagramFollows").textContent =
      dummyData.instagramFollows;
    document.getElementById("youtubeSubs").textContent = dummyData.youtubeSubs;
  }
  