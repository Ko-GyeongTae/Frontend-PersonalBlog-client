import { Menu } from "semantic-ui-react";
import { useRouter } from 'next/router';

export default function Gnb(){
    const router = useRouter();
    let activeItem;
    if(router.pathname === '/Portfolio/Backend'){
        activeItem = 'Backend';
    } else if(router.pathname === '/Portfolio/Frontend') {
        activeItem = 'Frontend';
    } else if(router.pathname === '/Portfolio/Android') {
        activeItem = 'Android';
    } else if(router.pathname === '/Portfolio/Ios'){
        activeItem = 'Ios';
    } else if(router.pathname === '/Portfolio/Program'){
        activeItem = 'Program';
    }
    function goLink(e, data){
        if(data.name === 'Backend'){
            router.push('/Portfolio/Backend');
        } else if(data.name === 'Frontend'){
            router.push('/Portfolio/Frontend');
        } else if(data.name === 'Android'){
            router.push('/Portfolio/Android');
        } else if(data.name === 'Ios'){
            router.push('/Portfolio/Ios');
        } else if(data.name === 'Program'){
            router.push('/Portfolio/Program');
        }
    }
    return (
        <Menu inverted>
            <Menu.Item
                name="Backend"
                active={activeItem === 'Backend'}
                onClick={goLink}
            />
            <Menu.Item
                name="Frontend"
                active={activeItem === 'Frontend'}
                onClick={goLink}
            />
            <Menu.Item
                name="Android"
                active={activeItem === 'Android'}
                onClick={goLink}
            />
            <Menu.Item
                name="Ios"
                active={activeItem === 'Ios'}
                onClick={goLink}
            />
            <Menu.Item
                name="Program"
                active={activeItem === 'Program'}
                onClick={goLink}
            />
        </Menu>
    );
}