import Desktop from './lib/Desktop/index.jsx';
import Error from './lib/Error/index.jsx';
import parse from './lib/parse.jsx';

export const refreshFrequency = 1000

export const command = './powerbar/status-spgi.sh'


export const icon = {
  background: '#eee',
  width: '22px',
  height: '20px',
  position: 'fixed',
  display: 'flex',
  fontFamily: 'Roboto Mono For Powerline',
  overflow: 'hidden',
  bottom: '0px',
  right: '0px',
  left: '16%',
}

export const spgi = {
  background: 'rgba(46, 51, 64, .2)',
  color: '#eee',
  width: '5%',
  height: '20px',
  position: 'fixed',
  display: 'flex',
  fontFamily: 'Roboto Mono For Powerline',
  fontSize: '12px',
  overflow: 'hidden',
  bottom: '0px',
  right: '0px',
  left: '16.9%',
}


export const render = ({output}) => {
  console.log(`spgi bar output: ${output}`);
  const data = parse(output);
  if (typeof data === 'undefined') {
    return (
      <div style={spgi}>
        <Error msg="" side="left"/>
      </div>
    )
  }
  if (typeof data.error !== 'undefined') {
    return (
      <div style={spgi}>
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
         <div style={{width: "2px"}}/>
        <img src="https://companiesmarketcap.com/img/company-logos/256/SPGI.png" width="18px"/>
         <div style={{width: "2px"}}/>
      </div>

      <div style={spgi}>
         <div style={{width: "5px"}}/>
  
         <div style={{marginTop: '3px'}}>{" $" + parts[1] + " "}</div>
         <div style={{width: "5px"}}/>
         <div style={{color, marginTop: '3px'}}>{"(" + parts[2]})</div>
      </div>
    </div>
  )
}

export default null
