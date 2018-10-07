import {observable, action} from 'mobx'




class AppState{

    // global
    @observable scrollY=0
    @observable mobile = false
    
    // navigation
    // the header index, which the user stays at 
    @observable pointerindex = -1
    @observable focusindex = -1
    @observable tabname = 'Home'
    // // sidenav
    @observable open=false  
    @observable expandindex = -1
}

export default AppState