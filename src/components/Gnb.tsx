import { Menu } from "semantic-ui-react";
import { useRouter } from 'next/router';

export default function Gnb(){
    const router = useRouter();
    let activeItem;
    if(router.pathname === '/Backend'){
        activeItem = 'Backend';
    } else if(router.pathname === '/Frontend') {
        activeItem = 'Frontend';
    } else if(router.pathname === '/Android') {
        activeItem = 'Android';
    } else if(router.pathname === '/Ios'){
        activeItem = 'Ios';
    }
    function goLink(e, data){
        if(data.name === 'Backend'){
            router.push('/Backend');
        } else if(data.name === 'Frontend'){
            router.push('/Frontend');
        } else if(data.name === 'Android'){
            router.push('/Android');
        } else if(data.name === 'Ios'){
            router.push('/Ios');
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
        </Menu>
    );
}