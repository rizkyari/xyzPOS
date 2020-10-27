import React,{Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component{
    render(){
        const rightContent = [
            <div className="xl:mr-48">
                <Link to="/dashboard"><span className='font-semibold mr-4 text-2xl'>Fitur</span></Link>
                <Link to="/dashboard"><span className='font-semibold mx-4 text-2xl'>Belangganan</span></Link>
                <button type="button" style={{border:"2px solid #EB414F", color:"#EB414F"}} className="py-1 px-5 rounded-full font-bold">Masuk</button>
            </div>
        ]
        return(
            <React.Fragment>
                <div className="flex justify-between pt-8">
                <div className="xl:ml-48 font-nunito text-3xl">
                    <p>xyz<span className="font-bold">POS</span></p>
                </div>
                <div className="rightContainer">{rightContent}</div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Navbar);