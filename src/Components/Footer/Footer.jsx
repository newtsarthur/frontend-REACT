import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-5 text-center">
        {/* 🔥 Coluna 0 - Título (Acima das outras colunas) */}
        <h2 className="text-2xl font-bold text-white mb-6">
          Filmes Online Grátis - Series Online - Animes Online
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* 🔹 Coluna 1 - Informações */}
        <div>
          <h3 className="text-lg c font-semibold text-white mb-3">Informações</h3>
          <br></br>

          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Conta VIP</a></li>
            <li><a href="#" className="hover:text-red-500">Suporte e FAQ</a></li>
            <li><a href="#" className="hover:text-red-500">Política DMCA</a></li>
            <li><a href="#" className="hover:text-red-500">Termos e condições</a></li>
          </ul>
        </div>

        {/* 🔹 Coluna 2 - Mídias Sociais */}
        <div>
          <h3 className="text-lg c font-semibold text-white mb-3">Mídias Sociais</h3>
          <br></br>

          <p className="text-sm mb-3">
            Siga o Vizer! Sem spam, postamos apenas atualizações do site e aplicativo.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-xl"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* 🔹 Coluna 3 - Aplicativo */}
        <div>
          <h3 className="text-lg c font-semibold text-white mb-3">Aplicativo Vizer</h3>
          <br></br>

          <p className="text-sm mb-3">Já conhece o nosso aplicativo?</p>
          <a href="#" className="footer-button">
            Baixar Aplicativo
          </a>
        </div>
        <div>
          <h3 className="text-lg c font-semibold text-white mb-3">Conteúdo & API</h3>
          <br></br>
          <p className="text-sm text-gray-400">
            Todo o conteúdo nesse site é promovido pela <span className="text-white font-bold">WAREZCDN</span>.
            A maior API de filmes, séries e animes do mundo.
          </p>
        </div>
      </div>
      

      {/* 🔥 Seção de API e Parceiros */}
      <div className="max-w-7xl c px-5 mt-8 text-center border-t border-gray-700 pt-6">
          <p className="text-xs text-gray-500 mt-4">
          O vizer é uma plataforma de site e aplicativo para assistir filmes x series online grátis! O nosso site atualiza todas as séries no dia em legendado e dublado, e como o nosso site é um indexador automático, somos os mais rápidos postadores do Brasil. Vizer não armazena mega filmes e series em nosso site, por isso é completamente dentro da lei. O vizer indexa conteudo encontrado na web automáticamente usando Robots e Inteligência artificial. O uso do vizer é totalmente responsabilidade do usuário. A distribuição de filmes é da parte de plataformas como mystream, fembed entre outros. Qualquer violação de direitos autorais, entre em contato com o distribuidor. Em caso de dúvidas ou reclamações sobre conteúdo, funcionalidade do site, anúncios entre outros, entre em contato com a equipe de suporte.
          </p>
        {/* 🔹 Parceiros */}
        <div className="mt-6">
          <br></br>
          <h3 className="text-lg font-semibold text-white mb-3">Parceiros do Vizer</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-400 hover:text-red-500 text-sm">Flixei</a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-sm">GFilmesOnline</a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-sm">SuperFlix</a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-sm">MegaFilmes</a>
          </div>
          <br></br>
        </div>

        {/* 🔹 Copyright */}
        <p className="text-xs text-gray-600 mt-6">
          &copy; 2025 Vizer LLC Seychelles. Todos os direitos reservados.
        </p>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </footer>
  );
};

export default Footer;
