
import React, { Component } from 'react'

export  class ContactFilter extends Component {

        state = {
            filterBy: null
        }
        componentDidMount(){
        this.setState({filterBy:{ ...this.props.filterBy } })
        }

        handelChange = ( {target} ) => {
            const field = target.name
            let value = target.value
            this.setState(
                ({ filterBy }) => ({ filterBy:{...filterBy, [field]:value } }),
            () => this.props.onChangeFilter(this.state.filterBy)
            )
          
        }

  render() {
    if(!this.state.filterBy)return <div>Loading...</div>
    const {email,name,phone} = this.state.filterBy
    return (
    <section className='form-container'>

    <form className='filter-form'>
        <label htmlFor='name'></label>
        <input  value={name} onChange={this.handelChange} type='text' name='name' id='name' placeholder='name?'/>

        <label htmlFor='email'></label>
        <input value= {email} onChange={this.handelChange} type='text' name='email' id='email' placeholder='email?'/>

        <label htmlFor='phone'></label>
        <input value={phone} onChange={this.handelChange} type='text' name='phone' id='phone' placeholder='phone?' />
    </form>
    </section>
    )
  }
}

