import listaCategorias from '../../dados/categorias'
import listaPostagens from '../../dados/postagens'


function Middle(){
    
    return(
        <div className="meio">
            <div className="conteudo">
               {
                listaPostagens.map(postagem => (
                    <div key={postagem.id} className="card post">
                        <h1>{postagem.title}</h1>
                        <h2>{postagem.autor}</h2>
                        <img src={postagem.img} alt=""/>
                        <p>{postagem.texto}</p>
                        <a id="button" ><button >Continuar lendo</button> </a>
                    </div>
                   ))
               }
                
            </div>
                
            <div className="card dir">
                <input type="text"  placeholder="Pesquise aqui..."/>
                <div>
                    <h1>Categorias</h1>
                    {listaCategorias.map(categoria => (
                        <div key={categoria.id} className="categ">
                            <a>{categoria.title}</a>
                            <p>{categoria.qtdPostagensRelacionadas}</p>
                        </div>
                    ))}
                    
                </div>
                <div>
                    <h1>Publicidade</h1>
                    <div className="anuncio">340 X 240</div>
                    <div className="anuncio">340 X 240</div>
                    <div className="anuncio">340 X 240</div>
                </div>
            </div>

        </div>
    );
}

export default Middle;