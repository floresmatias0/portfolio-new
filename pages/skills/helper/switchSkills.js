
export const handleChange = (type,cards,setCards) => {
    switch(type){
        case 'react' :
            !cards.react ? setCards({...cards, react : true}) : setCards({...cards, react : false});
            break;
        case 'express' :
            !cards.express ? setCards({...cards, express : true}) : setCards({...cards, express : false});
            break;
        case 'node' :
            !cards.node ? setCards({...cards, node : true}) : setCards({...cards, node : false});
            break;
        case 'sequelize' :
            !cards.sequelize ? setCards({...cards, sequelize : true}) : setCards({...cards, sequelize : false});
            break;
        case 'next' :
            !cards.next ? setCards({...cards, next : true}) : setCards({...cards, next : false});
            break;
        case 'javascript' :
            !cards.javascript ? setCards({...cards, javascript : true}) : setCards({...cards, javascript : false});
            break;
        case 'css' :
            !cards.css ? setCards({...cards, css : true}) : setCards({...cards, css : false});
            break;
        case 'html' :
            !cards.html ? setCards({...cards, html : true}) : setCards({...cards, html : false});
            break;
        case 'postgres' :
            !cards.postgres ? setCards({...cards, postgres : true}) : setCards({...cards, postgres : false});
            break;
        case 'server' :
            !cards.server ? setCards({...cards, server : true}) : setCards({...cards, server : false});
            break;
        case 'continue' :
            !cards.continue ? setCards({...cards, continue : true}) : setCards({...cards, continue : false});
            break;
        case 'powerBi' :
            !cards.powerBi ? setCards({...cards, powerBi : true}) : setCards({...cards, powerBi : false});
            break;
        default:
            console.log('error')
    }  
}
