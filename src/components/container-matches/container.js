import React from "react";
import ippoVSsendo from '../../assets/faceoffipposendo.jpg';
import miyataVSippo from '../../assets/miyatavsippo.jpg';
import IppoVSeiji from '../../assets/eijivsippo.webp'
import './container.css'


function Conteiner() {
    const luta1 = {
        id: 1,
        thumb: ippoVSsendo,
        h1: "Makunouchi Ippo Vs Takeshi Sendou - LOLAPALOOZA",
        description : "Makunouchi era no momento o desafiante número ao cinturão dos pesos leves do Japão. Sendou por sua vez, era o atual campeão. Com o cinturão em jogo, ambos realizam uma das lutas mais brutais do anime, ultrappassando a marca de 8 rounds. O apelido de LOLAPALOOZA é pelo sons que socos emitiam.",
        first3 : true
    };
    
    const boxingMatches = [luta1]
    
    for (const match of  boxingMatches) {
        const contentLutas = 
        <div className="content">
            <img className="thumb" src={$(match.thumb)}/>
                <div className="h1andtext">
                    <h1>${match.h1}</h1>
                        <p className="description">
                            ${match.description}
                        </p>
                     {/*    <button className="button">VER LUTA</button>  */}       
                </div>
        </div>

    document.getElementById("container").innerHTML += match
    } 
        
    
    return (
        <>
        <div id="background">
        <div id="container">
            <div id="content1" className="content">
                <img id="thumb1" className="thumb" src={ippoVSsendo}/>
                <div className="h1andtext">
                    <h1>Makunouchi Ippo Vs Takeshi Sendou - LOLAPALOOZA</h1>
                        <p className="description">
                            Makunouchi era no momento o desafiante número ao cinturão dos pesos leves do Japão.
                            Sendou por sua vez, era o atual campeão.
                            Com o cinturão em jogo, ambos realizam uma das lutas mais brutais do anime, ultrappassando a marca de 8 rounds. O apelido de LOLAPALOOZA é pelo sons que socos emitiam.
                        </p>
                     {/*    <button className="button">VER LUTA</button>  */}       
                </div>
            </div>
            <div id="content2" className="content">
                <img className="thumb" src={miyataVSippo}/>
                <div className="h1andtext">
                    <h1>Makunouchi Ippo Vs Ichiro Miyata - Primeiro Sparring</h1>
                   
                        <p className="description">
                            Ippo estava em sua primeira vez como aluno, na academia de boxe. O Mestre Kamogawa decidiu necessário um teste de alto nível.
                            Enfretar Miyata em um sparring, Ichiro só não havia se tornado profissional ainda, devido à idade. Ambos possuiam 15 anos.
                            Então Ippo neste momento garantiria seu lugar no ginásio como aluno. levando o sparring ao 3° round.
                        </p>
            
                    {/* <a href="fotos.html">
                        <button className="button">VER LUTA</button>        
                    </a>  */}  
                </div>
            </div>
            <div id="content3" className="content">
                <img className="thumb" src={IppoVSeiji}/>
                <div className="h1andtext">
                    <h1>Eiji Date Vs Makunouchi Ippo</h1>
            
                        <p className="description">
                            Eiji Date, indiscutivel maior campeão peso leve do Japão, estava precisando de um novo desafiante.
                            Vendo em Ippo um grande potencial, ele decide entrentá-lo defendendo seu cinturão. Nesta luta entendemos o porquê dele ser o maior campão.
                        </p>
            
                    <a href="fotos.html">
                        <button className="button">VER LUTA</button>        
                    </a>
                </div>
            </div>

            <div className="buttons">
                <button id="back-button" className="butsty" style={{visibility: "hidden"}}>Anterior</button>
                <button id="next-button" className="butsty">Próxima</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Conteiner