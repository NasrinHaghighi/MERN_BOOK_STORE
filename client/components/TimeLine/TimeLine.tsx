import * as React from "react";
import {Container,InnerConatiner, TitleDiv,SubTitle, Div, Photo, SS, BookCover, VerticalTimelineSS} from './styles'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { Books } from "../../constants/MOCK_DATA";
import { CgBoy , CgGirl} from "react-icons/cg";
import { Images } from "../../helpers/Image";
import Link from "next/link";

let wonamIcon ={
    background:'#e5b356'

}
let manIcon ={
    background:'#4c9dcf'

}
const date={
    color:'red'
}

interface Props {
    id: string; // Define the id prop with its type
  }
export default class ReactVerticalTimelineComponentTests extends React.Component<Props>  {
    constructor(props: Props) {
        super(props);
             }
  elementClick(){
   //console.log('p')
   }
 
    render() {
        return (
            <Container id={this.props.id}>
                <InnerConatiner>
                    <TitleDiv> <h1>New Released</h1></TitleDiv>
                   
            {/* <VerticalTimeline>
                {Books.slice(0,4).map((item, index)=>{
                    let woman=item.id%2 ===0
                    return <SS
                    key={item.id}
                    date={item.author }
                    dateClassName='date'
                    iconStyle={woman ? wonamIcon : manIcon}
                    icon={item.year}
                    onTimelineElementClick={this.elementClick}
                   >
                       
                     
                        <Div>
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <SubTitle >{item.author}</SubTitle>
                        <BookCover img={item.image}></BookCover>
                    
                        </Div>
                        <Photo className={index%2 ==0 ? 'odd' : 'even'}>
                        <Images src={item.face} width={100} height={100}   alt="book"/>
                        </Photo>
                    </SS>
                })}
            </VerticalTimeline> */}
         <VerticalTimelineSS>
            {Books.slice(0,4).map((item, index)=>{
                let woman=item.id%2 ===0
                return  <SS
                key={item.id}
                    date={item.author }
                    dateClassName='date'
                    iconStyle={woman ? wonamIcon : manIcon}
                    icon={item.year}
                    onTimelineElementClick={this.elementClick}
              >
              <Div>
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <SubTitle >{item.author}</SubTitle>
                        <BookCover img={item.image}></BookCover>
                    
                        </Div>
                        <Photo className={index%2 ==0 ? 'odd' : 'even'}>
                        <Images src={item.face} width={100} height={100}   alt="book"/>
                        </Photo>
              </SS>
                })}
       
      
      </VerticalTimelineSS>
           
          </InnerConatiner>
          </Container>
        );
    }
}