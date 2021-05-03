import Desktop from './lib/Desktop/index.jsx';
import Error from './lib/Error/index.jsx';
import parse from './lib/parse.jsx';

export const refreshFrequency = 5000

export const command = './powerbar/status-path.sh'


export const icon = {
  background: 'rgba(0,0,0,0)',
  width: '1%',
  height: '20px',
  position: 'fixed',
  display: 'flex',
  fontFamily: 'Roboto Mono For Powerline',
  overflow: 'hidden',
  bottom: '0px',
  right: '0px',
  left: '10%',
  WebkitBackdropFilter: 'blur(15px)'
}

export const path = {
  background: 'rgba(0,0,0,0)',
  color: '#eee',
  width: '10%',
  height: '20px',
  position: 'fixed',
  display: 'flex',
  fontFamily: 'Roboto Mono For Powerline',
  fontSize: '12px',
  overflow: 'hidden',
  bottom: '0px',
  right: '0px',
  left: '11%',
  WebkitBackdropFilter: 'blur(15px)'
}


export const render = ({output}) => {
  console.log(`path bar output: ${output}`);
  const data = parse(output);
  if (typeof data === 'undefined') {
    return (
      <div style={path}>
        <Error msg="Error: unknown script output" side="left"/>
      </div>
    )
  }
  if (typeof data.error !== 'undefined') {
    return (
      <div style={path}>
        <Error msg={`Error: ${data.error}`} side="left"/>
      </div>
    )
  }

  const parts = data.value.split(" ");
  var color = "green";
  if (parts[2] < 0) {
    color = "red"
  }
  

  return (
    <div>
      <div style={icon}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAb1BMVEUAAAD///9AQECQkJCwsLCgoKDf39/AwMAQEBAGBgb8/Pz29vbk5OSAgIAWFhZ9fX1paWlHR0cwMDDT09M4ODju7u4lJSVkZGTMzMwdHR1SUlKZmZnr6+u9vb2oqKgZGRl0dHRQUFApKSmHh4dvb29UpS/GAAAD30lEQVR4nO2d63qqMBBFAZWCeMFLvdtq2/d/xoM9t2r2xPCpw9Du9bcTzBJCEmSmUUQIIYQQQgghhJDWkCWmyYJFktg0CUWMQRFrUMQaFLEGRaxBEWtQxBoUsUZbRIo0ffYGtEHkeXscnXqQTToDMci+SDH+sh3Py50QZl5ktjjvxmiP46yLrJynI3kXBhoXGYzcjuQrFGlcZIJ6sihApG2RPe5KB4TaFoEnJIrWfTfUtMhO6gsYJaZFulJf3lsmMpT6smmZyLJGX24RSTsAeJNHzFDrWZjI9L4i8BJGt0ZID7XuhYnMWyYylvpy5zHycJEXqS/DlomI88hTy0Sk3t17Zn+8iDAjgvnQuIjS6ldBZPDqxtx/P6IgEs+cndUDdogaInE6P49YCEsH8yJxf7v+//fREI2PdohUKvtDss7y0bzsShrtEAmCIhShCEUoQpFvLLJ7AsCfrYyLhH8ERShCEYpQhCIUoQhFKEIRilCEIhShCEUoQhGKUIQiFKEIRShCEYpQ5EeJgLe9zYs8obBxqMjWuMhHqMg7an35KqyOyAyFgYwIzAG1vsxf1REZhIUJbFDry5d6dUQKFLYOFZmj1pfvy+iIxCCRNorkV3PPgbXWLvMplESmKA4kqSBS1NY5nUoi8DJHyR0AmHbkfIaSCEzmmoSJwIy2siERODnnYYNkjdo6XVQSgRNJ9BLiASdTd3wpifTzwEAXeGW5J1NJRGgdkOU6gF+Bm/CpJYLTmwOGewkbugtOLZEVDsVZUNfbuVOQlkgfzu3RSC4o80nxBptlbp6kloiU3zz334LhRBpFSzdSTUQokxElHpM+HiBwcaMm0ofzWsVcvLoK4XxECxCsJiKXZciE9/X3C6kFWqTpieAJ4ZN51x28q6MYnqH6WXoicjmDivVh/2Ws9FfvcN3/hwM6uqJIKp+SE/nbsRwPh8OPzdQfmMHCWYoiwiRdG7yN0RTZhdcH9wBz1HVF8JO2uggbZFWRGscQkR7r6YqgsmT1mEoLAV0RcaESSpZKR1YWiTs3eeTyEyRtkfhwi4hn+6IucsNskvseVuiLyAWLrpAJBSQbE4m3/iWIwGLmPWgTIvFK2pt42PhLxjYjEj/7VsIIac/StEg1oeCnCgJLqVJs8yLn1Vj8HP2jo2GRSqXn2z39JV+GaDQqUrEqryy+km3oz1rNipx2teNEuBsvli9X7lSWRH7L9A6b6es/n9HbpOzsa0icKFIAPMbjK2cWu+qzBzUF6mO6BGgdKGINiliDItagiDUoYg2KWIMi1qCINShiDYpY4weKfJt/a04IIYQQQgghhJDG+QVOt2dM4+XZRQAAAABJRU5ErkJggg==" width="20px"/>
      </div>

      <div style={path}>
         ${parts[1] + " "}
         <div style={{width: "5px"}}/>
         <div style={{color}}>{"(" + parts[2]})</div>
      </div>
    </div>
  )
}

export default null
