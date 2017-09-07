import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link, Table, TimelineUnit} from 'components'
import ReactList from 'react-list'

const Wrapper = styled.div`
  padding: 5px;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`
const Ranking = ({user, timelines }) => {
  var top = 10 
  var food = [], leisure = [], activity = [], beauty = []

  for(let i=0; i<timelines.length; i+=1) {
	if(timelines[i].category.includes("Beauty")){
	  beauty.push(<TimelineUnit key={timelines[i].id} user={user} timeline={timelines[i]} />)
	}
	if(timelines[i].category.includes("Activity")){
	  activity.push(<TimelineUnit key={timelines[i].id} user={user} timeline={timelines[i]} />)
	}
	if(timelines[i].category.includes("Leisure")){
	  leisure.push(<TimelineUnit key={timelines[i].id} user={user} timeline={timelines[i]} />)
	}
	if(timelines[i].category.includes("Food")){
	  food.push(<TimelineUnit key={timelines[i].id} user={user} timeline={timelines[i]} />)
	}
  }

  beauty.sort(function(a,b){
    return a.props.timeline.clicks < b.props.timeline.clicks ? 1 : a.props.timeline.clicks > b.props.timeline.clicks ? -1: 0 
  })
  food.sort(function(a,b){
    return a.props.timeline.clicks < b.props.timeline.clicks ? 1 : a.props.timeline.clicks > b.props.timeline.clicks ? -1: 0 
  })
  leisure.sort(function(a,b){
    return a.props.timeline.clicks < b.props.timeline.clicks ? 1 : a.props.timeline.clicks > b.props.timeline.clicks ? -1: 0 
  })
  activity.sort(function(a,b){
    return a.props.timeline.clicks < b.props.timeline.clicks ? 1 : a.props.timeline.clicks > b.props.timeline.clicks ? -1: 0 
  })


  function renderActivityItem(index, key){
   	return activity[index] ? <Wrapper key={key}>NO.{index+1} {activity[index]}</Wrapper> : <Wrapper></Wrapper>
  }
  function renderBeautyItem(index, key){
   	return beauty[index] ? <Wrapper key={key}>NO.{index+1} {beauty[index]}</Wrapper> : <Wrapper></Wrapper>
  }
  function renderLeisureItem(index, key){
   	return leisure[index] ? <Wrapper key={key}>NO.{index+1} {leisure[index]}</Wrapper> : <Wrapper></Wrapper>
  }
  function renderFoodItem(index, key){
   	return food[index] ? <Wrapper key={key}>NO.{index+1} {food[index]}</Wrapper> : <Wrapper></Wrapper>
  }


  return (

    <div style={{padding:'10px'}}>
	  <Table>
	    <tr>
	      <td style={{padding:'15px'}}>
		    <h1>Food</h1>
			<div style={{overflow:'scroll', maxHeight:'1000px'}}>
	          <ReactList 
	          itemRenderer={renderFoodItem}
	          length={top}
	          />
		    </div>
	      </td>

		  <td style={{padding:'15px', backgroundColor:'#ddc5ec'}}>
		    <h1>Activity</h1>
			<div style={{overflow:'scroll', maxHeight:'1000px'}}>
	          <ReactList 
	          itemRenderer={renderActivityItem}
	          length={top}
	          />
			</div>
	      </td>

	      <td style={{padding:'15px'}}>
		    <h1>Leisure</h1>
			<div style={{overflow:'scroll', maxHeight:'1000px'}}>
	          <ReactList 
	          itemRenderer={renderLeisureItem}
	          length={top}
	          />
			</div>
	      </td>

		  <td style={{padding:'15px', backgroundColor:'#ddc5ec'}}>
		    <h1>Beauty</h1>
			<div style={{overflow:'scroll', maxHeight:'1000px'}}>
	          <ReactList 
	          itemRenderer={renderBeautyItem}
	          length={top}
	          />
			</div>
	      </td>
	    </tr>
	  </Table>
    </div>
  )
}

Ranking.propTypes = {
  users: PropTypes.object.isRequired,
  timelines: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Ranking