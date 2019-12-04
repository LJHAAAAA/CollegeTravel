import React, { Component } from 'react';

export default class Todoing extends Component {
    
  render() {
    var {todo} = this.props;
    
    return (
        <div>
           <h2 className='feng_comment_pinglun'>评论 
              <span>
                  （{this.props.doing}）
               </span>
            </h2>
			<ul>
            {
                todo.map((item,idx)=>{
                    
                    if(item.checked == false){
                        return(
                            <li key={idx} className='feng_comment_li'>                           
                            用户1531：{item.key}<button onClick={()=>this.props.del(idx)} className='feng_comment_button'>删 除</button>
                            </li>
                    )}
                })        
            }
			</ul>
        </div>
    );
  }
}
