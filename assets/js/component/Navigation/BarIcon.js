const MenuIcon = styled.div`
    position: absolute;
    width: 40px;
    height: 5px;
    border-radius: 2px;
    background-color: dimgrey;
    transition: 0.5s;
    ${({active})=>active && `
        background-color: transparent;
    `}


    &::before, &::after{
        content: '';
        position: absolute;
        border-radius: 2px;
        width: 40px;
        height: 5px;
        background-color: dimgrey;
        transition: 0.5s;
    }

    &::before{
        top: -12px;
        ${({active})=> active &&`
            top: 0px;
            transform: rotate(45deg);
        `} 
    }

    &::after{
        top:12px;
        ${({active})=> active &&`
            top: 0px;
            transform: rotate(135deg);
        `} 
    }
    `
