import Dashboard from '../views/dashboard/Dashboard';
import ManageBills from '../views/bills/ManageBills';
import ManageBottels from '../views/bottels/ManageBottels';
import ManageTp from '../views/tp/ManageTp';

const Routes= [
    {
        icon:"sliders",
        name:"Dashboard",
        path:"/",
        component:Dashboard,
    },
    {
        icon:"sliders",
        name:"Bills",
        path:"/bills",
        component:ManageBills,
    },
    {
        icon:"sliders",
        name:"Bottels",
        path:"/bottels",
        component:ManageBottels,
    },
    {
        icon:"sliders",
        name:"Tarnsport(TP)",
        path:"/tp",
        component:ManageTp,
    }

]

export default Routes;