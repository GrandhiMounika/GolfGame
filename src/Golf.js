import React, { Component } from 'react';
import './Golf.css'
class Golf extends Component {
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleStroke=this.handleStroke.bind(this)
        this.handlePar=this.handlePar.bind(this)
        this.state={
            stroke:'',
            par:'',
            msg:""
        };
    }
    handleStroke(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    handlePar(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    handleSubmit=(stroke,par)=>{
        var res,msg;
        this.state.stroke=Math.abs(stroke);
        this.state.par=Math.abs(par);
        res=this.state.par-this.state.stroke;
             if(!this.state.stroke && !this.state.par)
                this.setState({msg:"Please enter stroke and par"})
             else if(!this.state.stroke && !this.state.par)
                this.setState({msg:"Please enter stroke and par"})
             else if(!this.state.stroke && this.state.par)
                this.setState({msg:"Please enter stroke"})
             else if(this.state.stroke && !this.state.par)
                this.setState({msg:"Please enter par"})
             else if(this.state.par== 1)
                this.setState({msg:"Hole-in-one!"})
             else if(res<= -2) 
                this.setState({msg:"Eagle"})
             else if(res== -1)
                this.setState({msg:"Birdie"})
             else if(res==0)
                this.setState({msg:"Par"})
             else if(res==1)
                this.setState({msg:"Bogey"})
             else if (res==2)
                this.setState({msg:"Double Bogey"})
             else if(res>=3)
                this.setState({msg:"Go Home!"})
}
    render() {
        return (
            <div className='bg'>
            <input type='text' className='fieldoutline' style={{ marginTop: '28px' }}
            placeholder='Stroke' name="stroke" id="stroke" value={this.state.stroke} onChange={this.handleStroke}/>
            <input type='text' className='fieldoutline' style={{ marginTop: '13.9px' }}
            placeholder='Par' name="par" id="par" value={this.state.par} onChange={this.handlePar}/>
            <div className="error">{this.state.msg}</div>
            <div className='button_bg' style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer'
              }}
                tabIndex="1" onClick={()=>this.handleSubmit(this.state.stroke,this.state.par)}>
                Calculate
            </div>
            </div>
        );
    }
}
export default Golf;