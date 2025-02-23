// import { useState } from "react";

// export default function SuperFlixPlayer() {
//   const [type, setType] = useState("filme");
//   const [imdbId, setImdbId] = useState("");
//   const [season, setSeason] = useState("");
//   const [episode, setEpisode] = useState("");
//   const [embedUrl, setEmbedUrl] = useState(null);

//   const generateEmbedUrl = () => {
//     let requestType = type === "anime" ? "serie" : type;
//     let url = `https://superflixapi.link/${requestType}/${imdbId}`;
//     if ((requestType === "serie") && season && episode) {
//       url += `/${season}/${episode}`;
//     }
//     setEmbedUrl(url);
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-4">
//       <h1 className="text-2xl font-bold">SuperFlix Player</h1>
//       <div className="flex gap-2">
//         <select
//           className="p-2 border rounded"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//         >
//           <option value="filme">Filme</option>
//           <option value="serie">Série</option>
//           <option value="anime">Anime</option>
//         </select>
//         <input
//           className="p-2 border rounded"
//           type="text"
//           placeholder="IMDB ID"
//           value={imdbId}
//           onChange={(e) => setImdbId(e.target.value)}
//         />
//         {(type === "serie" || type === "anime") && (
//           <>
//             <input
//               className="p-2 border rounded"
//               type="number"
//               placeholder="Temporada"
//               value={season}
//               onChange={(e) => setSeason(e.target.value)}
//             />
//             <input
//               className="p-2 border rounded"
//               type="number"
//               placeholder="Episódio"
//               value={episode}
//               onChange={(e) => setEpisode(e.target.value)}
//             />
//           </>
//         )}
//         <button
//           className="p-2 bg-blue-500 text-white rounded"
//           onClick={generateEmbedUrl}
//         >
//           Gerar Player
//         </button>
//       </div>

//       {embedUrl && (
//         <div className="w-full max-w-3xl aspect-video border mt-4">
//           <iframe
//             className="w-full h-full"
//             src={embedUrl}
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// }
// import { useState } from "react";
// import { Link } from "react-router-dom"; // Para links internos
// import "./Home.css";

// export default function SuperFlixPlayer() {
//   const [type, setType] = useState("filme");
//   const [imdbId, setImdbId] = useState("");
//   const [season, setSeason] = useState("");
//   const [episode, setEpisode] = useState("");
//   const [embedUrl, setEmbedUrl] = useState(null);

//   const generateEmbedUrl = () => {
//     let requestType = type === "anime" ? "serie" : type;
//     let url = `https://superflixapi.link/${requestType}/${imdbId}`;
//     if (requestType === "serie" && season && episode) {
//       url += `/${season}/${episode}`;
//     }
//     setEmbedUrl(url);
//   };

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Navbar */}
//       <nav className="nav" id="navbar">
//         <Link to="/home">
//           <img src="../images/logo.png" alt="SuperFlix Logo" className="nav__logo" />
//         </Link>
//         <ul>
//           <li><Link className="head-link" to="/">Início</Link></li>
//           <li><Link className="head-link" to="/series">Séries</Link></li>
//           <li><Link className="head-link" to="/filmes">Filmes</Link></li>
//         </ul>
//         <img className="lupa" src="../images/search.svg" alt="Lupa" />
//         <img className="bell" src="../images/bell.svg" alt="Notificações" />
//         <img className="nav__avatar" src="../images/user-avatar.png" alt="Avatar" />
//       </nav>

//       {/* Banner */}
//       <header className="banner">
//         <div className="bg-overlay"></div>
//         <div className="banner__contents">
//           <h1 className="banner__title">SuperFlix Player</h1>
//           <p className="banner__description">Assista seus filmes e séries favoritos com facilidade.</p>
//         </div>
//       </header>

//       {/* Player Section */}
//       <div className="p-8 flex flex-col items-center">
//         <div className="flex gap-4">
//           <select className="nav__dropdown" value={type} onChange={(e) => setType(e.target.value)}>
//             <option value="filme">Filme</option>
//             <option value="serie">Série</option>
//             <option value="anime">Anime</option>
//           </select>
//           <input className="nav__input" type="text" placeholder="IMDB ID" value={imdbId} onChange={(e) => setImdbId(e.target.value)} />
//           {(type === "serie" || type === "anime") && (
//             <>
//               <input className="nav__input" type="number" placeholder="Temporada" value={season} onChange={(e) => setSeason(e.target.value)} />
//               <input className="nav__input" type="number" placeholder="Episódio" value={episode} onChange={(e) => setEpisode(e.target.value)} />
//             </>
//           )}
//           <button className="banner__button play" onClick={generateEmbedUrl}>Gerar Player</button>
//         </div>
//       </div>

//       {/* Video Player */}
//       {embedUrl && (
//         <div className="row">
//           <iframe className="video__player" src={embedUrl} frameBorder="0" allowFullScreen></iframe>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer__icons">
//           <img className="svg" src="../images/facebook.svg" alt="Facebook" />
//           <img className="svg" src="../images/instagram.svg" alt="Instagram" />
//           <img className="svg" src="/twitter.svg" alt="Twitter" />
//           <img className="svg" src="/youtube.svg" alt="Youtube" />
//         </div>
//         <div className="footer__container">
//           <div className="footer__row">
//             <ul className="column">
//               <li><a href="/">Audiodescrição</a></li>
//               <li><a href="/">Central de ajuda</a></li>
//               <li><a href="/">Cartão pré-pago</a></li>
//               <button className="footer__serviceCode">Código de serviço</button>
//             </ul>
//             <ul className="column">
//               <li><a href="/">Imprensa</a></li>
//               <li><a href="/">Relações com investidores</a></li>
//               <li><a href="/">Carreiras</a></li>
//             </ul>
//           </div>
//         </div>
//         <span className="footer__trademark">© 2024 SuperFlix - Todos os direitos reservados.</span>
//       </footer>
//     </div>
//   );
// }

// import { useState } from "react";
// import { Link } from "react-router-dom"; // Para links internos
// import "./Home.css";

// export default function SuperFlixPlayer() {
//   const [type, setType] = useState("filme");
//   const [imdbId, setImdbId] = useState("");
//   const [season, setSeason] = useState("");
//   const [episode, setEpisode] = useState("");
//   const [embedUrl, setEmbedUrl] = useState(null);
//   const [movieInfo, setMovieInfo] = useState(null);

//   const generateEmbedUrl = async () => {
//     let requestType = type === "anime" ? "serie" : type;
//     let url = `https://superflixapi.link/${requestType}/${imdbId}`;
//     if (requestType === "serie" && season && episode) {
//       url += `/${season}/${episode}`;
//     }
//     setEmbedUrl(url);
    
//     // Buscar informações do filme/série
//     const apiKey = "YOUR_OMDB_API_KEY";
//     try {
//       const response = await fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`);
//       const data = await response.json();
//       if (data.Response === "True") {
//         setMovieInfo({
//           title: data.Title,
//           poster: data.Poster,
//         });
//       } else {
//         setMovieInfo(null);
//       }
//     } catch (error) {
//       console.error("Erro ao buscar informações do filme:", error);
//     }
//   };

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Navbar */}
//       <nav className="nav" id="navbar">
//         <Link to="/home">
//           <img src="../images/logo.png" alt="SuperFlix Logo" className="nav__logo" />
//         </Link>
//         <ul>
//           <li><Link className="head-link" to="/">Início</Link></li>
//           <li><Link className="head-link" to="/series">Séries</Link></li>
//           <li><Link className="head-link" to="/filmes">Filmes</Link></li>
//         </ul>
//       </nav>

//       {/* Player Section */}
//       <div className="p-8 flex flex-col items-center">
//         <div className="flex gap-4">
//           <select className="nav__dropdown" value={type} onChange={(e) => setType(e.target.value)}>
//             <option value="filme">Filme</option>
//             <option value="serie">Série</option>
//             <option value="anime">Anime</option>
//           </select>
//           <input className="nav__input" type="text" placeholder="IMDB ID" value={imdbId} onChange={(e) => setImdbId(e.target.value)} />
//           {(type === "serie" || type === "anime") && (
//             <>
//               <input className="nav__input" type="number" placeholder="Temporada" value={season} onChange={(e) => setSeason(e.target.value)} />
//               <input className="nav__input" type="number" placeholder="Episódio" value={episode} onChange={(e) => setEpisode(e.target.value)} />
//             </>
//           )}
//           <button className="banner__button play" onClick={generateEmbedUrl}>Gerar Player</button>
//         </div>
//       </div>

//       {/* Exibição de informações do filme/série */}
//       {movieInfo && (
//         <div className="text-center p-4">
//           <h2 className="text-xl font-bold">{movieInfo.title}</h2>
//           <img className="mx-auto w-48" src={movieInfo.poster} alt={movieInfo.title} />
//         </div>
//       )}

//       {/* Video Player */}
//       {embedUrl && (
//         <div className="row">
//           <iframe className="video__player" src={embedUrl} frameBorder="0" allowFullScreen></iframe>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// export default function SuperFlixPlayer() {
//   const [search, setSearch] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [embedUrl, setEmbedUrl] = useState(null);

//   const fetchMovies = async () => {
//     if (search.length < 3) return; // Evita buscas com poucas letras
//     try {
//       const response = await fetch(`https://search.imdbot.workers.dev/?q=${search}`);
//       const data = await response.json();
//       setMovies(data.description || []);
//     } catch (error) {
//       console.error("Erro ao buscar filmes:", error);
//     }
//   };

//   const generateEmbedUrl = (imdbId) => {
//     setEmbedUrl(`https://superflixapi.link/filme/${imdbId}`);
//   };

//   return (
//     <div className="bg-black text-white min-h-screen">
//       <nav className="nav">
//         <Link to="/home">
//           <img src="../images/logo.png" alt="SuperFlix Logo" className="nav__logo" />
//         </Link>
//         <ul>
//           <li><Link className="head-link" to="/">Início</Link></li>
//           <li><Link className="head-link" to="/series">Séries</Link></li>
//           <li><Link className="head-link" to="/filmes">Filmes</Link></li>
//         </ul>
//       </nav>

//       <header className="banner">
//         <div className="banner__contents">
//           <h1 className="banner__title">SuperFlix Player</h1>
//           <p className="banner__description">Assista seus filmes e séries favoritos com facilidade.</p>
//         </div>
//       </header>

//       <div className="p-8 flex flex-col items-center">
//         <input
//           className="nav__input"
//           type="text"
//           placeholder="Digite o nome do filme"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           onKeyUp={fetchMovies}
//         />
//       </div>

//       <div className="movies-grid">
//         {movies.map((movie) => (
//           <div key={movie.id} className="movie-card">
//             <img src={movie.image} alt={movie.title} />
//             <h3>{movie.title}</h3>
//             <button onClick={() => generateEmbedUrl(movie.id)}>Assistir</button>
//           </div>
//         ))}
//       </div>

//       {embedUrl && (
//         <div className="row">
//           <iframe className="video__player" src={embedUrl} frameBorder="0" allowFullScreen></iframe>
//         </div>
//       )}
//     </div>
//   );
// }
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// export default function SuperFlixPlayer() {
//   const [search, setSearch] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [embedUrl, setEmbedUrl] = useState(null);
//   const [type, setType] = useState("filme");
//   const [season, setSeason] = useState("");
//   const [episode, setEpisode] = useState("");

//   // Buscar filmes pelo nome na API gratuita do IMDb
//   const fetchMovies = async () => {
//     if (!search) return;
//     try {
//       const response = await fetch(`https://search.imdbot.workers.dev/?q=${search}`);
//       const data = await response.json();
//       if (data.description) {
//         setMovies(
//           data.description.map((movie) => ({
//             id: movie.id, // IMDb ID
//             title: movie.title,
//             image: movie.image,
//           }))
//         );
//       }
//     } catch (error) {
//       console.error("Erro ao buscar filmes", error);
//     }
//   };

//   // Gerar o iframe para o SuperFlix com base no ID do IMDb
//   const generateEmbedUrl = (imdbId) => {
//     let requestType = type === "anime" ? "serie" : type;
//     let url = `https://superflixapi.link/${requestType}/${imdbId}`;
//     if (requestType === "serie" && season && episode) {
//       url += `/${season}/${episode}`;
//     }
//     setEmbedUrl(url);
//   };

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Pesquisa */}
//       <div className="p-8 flex flex-col items-center">
//         <div className="flex gap-4">
//           <input
//             className="nav__input"
//             type="text"
//             placeholder="Digite o nome do filme, série ou anime"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button className="banner__button play" onClick={fetchMovies}>
//             Buscar
//           </button>
//         </div>
//       </div>

//       {/* Lista de filmes */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
//         {movies.map((movie) => (
//           <div
//             key={movie.id}
//             className="cursor-pointer"
//             onClick={() => generateEmbedUrl(movie.id)}
//           >
//             <img src={movie.image} alt={movie.title} className="w-full h-auto rounded-lg" />
//             <h3 className="text-center text-lg mt-2">{movie.title}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Opções antes de carregar o player */}
//       {embedUrl && (
//         <div className="flex flex-col items-center gap-4 p-4">
//           <h2 className="text-xl font-bold">Escolha o tipo</h2>
//           <div className="flex gap-2">
//             <select
//               className="p-2 border rounded"
//               value={type}
//               onChange={(e) => setType(e.target.value)}
//             >
//               <option value="filme">Filme</option>
//               <option value="serie">Série</option>
//               <option value="anime">Anime</option>
//             </select>
//             {(type === "serie" || type === "anime") && (
//               <>
//                 <input
//                   className="p-2 border rounded"
//                   type="number"
//                   placeholder="Temporada"
//                   value={season}
//                   onChange={(e) => setSeason(e.target.value)}
//                 />
//                 <input
//                   className="p-2 border rounded"
//                   type="number"
//                   placeholder="Episódio"
//                   value={episode}
//                   onChange={(e) => setEpisode(e.target.value)}
//                 />
//               </>
//             )}
//             <button className="p-2 bg-blue-500 text-white rounded" onClick={() => generateEmbedUrl(movies[0]?.id)}>
//               Gerar Player
//             </button>
//           </div>

//           {/* Player */}
//           <div className="w-full max-w-3xl aspect-video border mt-4">
//             <iframe className="w-full h-full" src={embedUrl} frameBorder="0" allowFullScreen></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState } from "react";
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
  const [embedUrl, setEmbedUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [season, setSeason] = useState("");
  const [episode, setEpisode] = useState("");

  // Função para traduzir texto para inglês
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

    try {
      // Traduzindo para inglês antes da busca
      const translatedSearch = await translateToEnglish(search);
      console.log(`🔍 Termo traduzido: ${search} → ${translatedSearch}`);

      const response = await fetch(`https://search.imdbot.workers.dev/?q=${translatedSearch}`);
      const data = await response.json();
      console.log("📌 Resposta da API IMDb:", JSON.stringify(data, null, 2));

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
        .filter((movie) => movie !== null && movie.image) // 🔥 Remove itens sem imagem
        .slice(0, 14); // 🔥 Limita aos primeiros 14 resultados

      console.log("📌 Conteúdo filtrado:", filteredMovies);
      setMovies(filteredMovies);
    } catch (error) {
      console.error("❌ Erro ao buscar filmes:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (imdbId) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== imdbId));
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
      <nav className="nav">
        <Link to="/home">
          <img src="../images/logo.png" alt="SuperFlix Logo" className="nav__logo" />
        </Link>
        <ul>
          <li><Link className="head-link" to="/">Início</Link></li>
          <li><Link className="head-link" to="/series">Séries</Link></li>
          <li><Link className="head-link" to="/filmes">Filmes</Link></li>
        </ul>
      </nav>

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
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          onClick={fetchMovies}
        >
          Buscar
        </button>
        {loading && <p className="text-gray-400 mt-2">Buscando...</p>}
      </div>

      {/* 🔥 Carrossel de Filmes/Séries/Animes */}
      <div className="p-8">
        {movies.length > 0 ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {movies.map((movie, index) => (
              <SwiperSlide key={`${movie.id}-${index}`} className="movie-card">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                  onError={() => handleImageError(movie.id)}
                />
                <h3 className="text-center text-lg mt-2">{movie.title} ({movie.type})</h3>

                {movie.type !== "Filme" && (
                  <div className="flex flex-col mt-2">
                    <input
                      className="p-2 border rounded mb-2"
                      type="number"
                      placeholder="Temporada"
                      value={season}
                      onChange={(e) => setSeason(e.target.value)}
                    />
                    <input
                      className="p-2 border rounded mb-2"
                      type="number"
                      placeholder="Episódio"
                      value={episode}
                      onChange={(e) => setEpisode(e.target.value)}
                    />
                  </div>
                )}

                <button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  onClick={() => generateEmbedUrl(movie)}
                >
                  Assistir
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          !loading && <p className="text-gray-400 text-center">Nenhum resultado encontrado.</p>
        )}
      </div>

      {/* 🔥 Player de Vídeo */}
      {embedUrl && (
        <div className="row flex flex-col items-center mt-8">
          <button
            className="mb-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            onClick={() => setEmbedUrl(null)}
          >
            ✖ Fechar Player
          </button>
          <iframe
            className="video__player w-full max-w-3xl h-96"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            title="SuperFlix Player"
          ></iframe>
        </div>
      )}
    </div>
  );
}

