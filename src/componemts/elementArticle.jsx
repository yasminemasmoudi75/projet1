import {Link } from "react-router-dom";
 function ElementArticle({articles,deleteProd}) {




  
    return ( <div className="row">
        {
        
        articles && articles.length>0 &&articles.map((art)=>{
            return (<div key={art.id} className="col-sm-4">
                    <div className="card" style={{"width": "18rem"}}>
  <img src={art.imageartpetitf} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{art.reference}</h5>
    <p className="card-text">{art.designation}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">prix:  {art.prixVente}</li>
    <li className="list-group-item">caracteristiques:  { art.caracteristiques}</li>
    <li className="list-group-item">qtestock : {art.qtestock}</li>
  </ul>
  <div className="card-body">
  <Link  to={`/edit/${art.id}`} className="btn btnprimary">Modifier</Link>
  <button onClick={()=>{deleteProd(art.id)}} className="btn btn-danger">Supprimer</button>
  </div>
</div>

            </div>)
        })
    }

    
    </div> );
}
export default ElementArticle;