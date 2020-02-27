import React from 'react'
import RenderList from './RenderList'


function List() {
        //const count = '*';
        const States = ['TN', 'KN', 'njf', 'jhfvh']
        const StatesList = States.map((State,index) => <div key ={index}> {index}  {State} </div>)


        return (
                <div>
                {StatesList}
                <RenderList />
                </div>
        );
}

export default List;