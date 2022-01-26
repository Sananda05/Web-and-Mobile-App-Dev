import './task/task.css';
;

function Form( props)
 {

    return(

        <form className="form" onSubmit={props.handleSubmit}>
        <div className=''>
          <div className='timerInput__label'>Title</div>
          <input
            className='timerInput'
            type='text'
            value={props.title}
            onChange={props.handleTitle}
          />
        </div>
        <div className='timerInput_One'>
          <div className='timerInput__label'>Project</div>
          <input
            className='timerInput'
            type='text'
            value={props.project}
            onChange={props.handleProject}
          />
        </div>
        <div>
            <span className="form_btn">
            <button className='edit_btn' type="submit" onClick={props.handleSubmit}>
                {props.creation ? 'Create': 'Edit'}
            </button>
            <button className='cancel_btn' onClick={props.cancle}>
               Cancel
            </button>
            </span>
        </div>
      </form>


    )
    
}

export default Form