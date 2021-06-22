export const getBadges = (name) => {
    if(name === 'javascript'){
        return '/badge/javascript.png';
    } 
    if(name === 'go'){
        return '/badge/go.png';
    }
    if(name === 'typescript'){
        return '/badge/typescript.png';
    }
    if(name === 'python'){
        return '/badge/python.png';
    }
    if(name === 'java'){
        return '/badge/java.png';
    }
    if(name === undefined){
        return '/badge/javascript.png';
    }
    if(name === 'c'){
        return '/badge/c.png';
    }
}