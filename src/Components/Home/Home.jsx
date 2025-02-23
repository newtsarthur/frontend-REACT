import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";

// Importando listas de IDs permitidos
import allowedMoviesJson from "./ids_filmes.json";
import allowedSeriesJson from "./ids_series.json";
import allowedAnimesJson from "./ids_animes.json";

// Convertendo os arquivos JSON para conjuntos para busca rápida
const allowedMovies = new Set(allowedMoviesJson.filmes || []);
const allowedSeries = new Set(allowedSeriesJson.series || []);
const allowedAnimes = new Set(allowedAnimesJson.animes || []);

export default function SuperFlixPlayer() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [recentReleases, setRecentReleases] = useState([]);
  const [embedUrl, setEmbedUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [season, setSeason] = useState("");
  const [episode, setEpisode] = useState("");
  const [showRecent, setShowRecent] = useState(true);

  useEffect(() => {
    fetchRecentReleases();
  }, []);

  const fetchRecentReleases = async () => {
    try {
      const response = await fetch("https://search.imdbot.workers.dev/?q=new");
      const data = await response.json();

      if (!data.description || !Array.isArray(data.description)) {
        console.error("❌ Estrutura inválida na API IMDb");
        return;
      }

      const filteredReleases = data.description
        .map((movie) => {
          const imdbId = movie["#IMDB_ID"];
          if (!imdbId) return null;

          let type = "Série";
          let formattedId = imdbId;

          if (allowedSeries.has(imdbId)) {
            type = "Filme";
            formattedId = allowedSeriesJson.series.find((id) => id === imdbId) || null;
          } else if (allowedAnimes.has(imdbId)) {
            type = "Anime";
            formattedId = allowedAnimesJson.animes.find((id) => id === imdbId) || null;
          }

          if (!formattedId) return null;

          return {
            id: formattedId,
            title: movie["#TITLE"] || "Título desconhecido",
            image: movie["#IMG_POSTER"] || "",
            type: type,
          };
        })
        .filter((movie) => movie !== null && movie.image)
        .slice(0, 14);

      setRecentReleases(filteredReleases);
    } catch (error) {
      console.error("❌ Erro ao buscar lançamentos:", error);
    }
  };

  const translateToEnglish = async (text) => {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=pt|en`
      );
      const data = await response.json();
      return data.responseData.translatedText || text;
    } catch (error) {
      console.error("Erro na tradução:", error);
      return text;
    }
  };

  const fetchMovies = async () => {
    if (search.length < 3) return;
    setLoading(true);
    setShowRecent(false);

    try {
      const translatedSearch = await translateToEnglish(search);
      console.log(`🔍 Termo traduzido: ${search} → ${translatedSearch}`);

      const response = await fetch(`https://search.imdbot.workers.dev/?q=${translatedSearch}`);
      const data = await response.json();

      if (!data.description || !Array.isArray(data.description)) {
        console.error("❌ Estrutura inválida recebida da API IMDb");
        setMovies([]);
        return;
      }

      const filteredMovies = data.description
        .map((movie) => {
          const imdbId = movie["#IMDB_ID"];
          if (!imdbId) return null;

          let type = "Série";
          let formattedId = imdbId;

          if (allowedSeries.has(imdbId)) {
            type = "Filme";
            formattedId = allowedSeriesJson.series.find((id) => id === imdbId) || null;
          } else if (allowedAnimes.has(imdbId)) {
            type = "Anime";
            formattedId = allowedAnimesJson.animes.find((id) => id === imdbId) || null;
          }

          if (!formattedId) return null;

          return {
            id: formattedId,
            title: movie["#TITLE"] || "Título desconhecido",
            image: movie["#IMG_POSTER"] || "",
            type: type,
          };
        })
        .filter((movie) => movie !== null && movie.image)
        .slice(0, 14);

      setMovies(filteredMovies);
    } catch (error) {
      console.error("❌ Erro ao buscar filmes:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const generateEmbedUrl = (movie) => {
    if (!movie) return;

    let url = `https://superflixapi.link/filme/${movie.id}`;
    if (movie.type === "Série" || movie.type === "Anime") {
      url = `https://superflixapi.link/serie/${movie.id}`;
      if (season) url += `/${season}`;
      if (season && episode) url += `/${episode}`;
    }

    setEmbedUrl(url);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">SuperFlix Player</h1>
          <p className="banner__description">Assista seus filmes, séries e animes favoritos!</p>
        </div>
      </header>

      <div className="p-8 flex flex-col items-center">
        <input
          className="nav__input"
          type="text"
          placeholder="Digite o nome do filme, série ou anime"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            if (e.target.value === "") setShowRecent(true);
          }}
        />
        <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded" onClick={fetchMovies}>
          Buscar
        </button>
      </div>

      {/* 🔥 Carrossel de Pesquisa */}
      {movies.length > 0 && (
        <div className="p-8">
          <h2 className="text-2xl text-white mb-4">Resultados da Pesquisa</h2>
          <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={5} navigation>
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <img src={movie.image} alt={movie.title} className="rounded-lg w-full" />
                <h3 className="text-lg mt-2 text-center">{movie.title} ({movie.type})</h3>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => generateEmbedUrl(movie)}>
                  Assistir
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* 🔥 Carrossel de Últimos Lançamentos */}
      {showRecent && recentReleases.length > 0 && (
        <div className="p-8">
          <h2 className="text-2xl text-white mb-4">Últimos Lançamentos</h2>
          <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={5} navigation>
            {recentReleases.map((movie) => (
              <SwiperSlide key={movie.id}>
                <img src={movie.image} alt={movie.title} className="rounded-lg w-full" />
                <h3 className="text-lg mt-2 text-center">{movie.title} ({movie.type})</h3>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => generateEmbedUrl(movie)}>
                  Assistir
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {embedUrl && <iframe className="video__player w-full h-96 mt-8" src={embedUrl} frameBorder="0" allowFullScreen></iframe>}
    </div>
  );
}
