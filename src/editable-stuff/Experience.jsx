import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './style.min.css';
import { School } from '@mui/icons-material';
import { Star } from '@mui/icons-material';
import { Work } from '@mui/icons-material';
import Container from "react-bootstrap/Container";

const Experience = () => {
 return (
	<div id="experience" className="bg-light m-0"> {/* Replaced Jumbotron */}
		<Container className="p-7">
			 <VerticalTimeline>
				
				  <VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(0, 128, 128)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(0, 128, 128)' }}
					date="2024 - Present"
					iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
					icon={<Star />}
				  >
					<h3 className="vertical-timeline-element-title">HCAI/XAI Researcher</h3>
					<h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>
					<p>
					  Investigating how LLMs can provide explainable outputs and adapt in real-time based on user feedback, specifically catering to the needs of neurodivergent users. The system aims to foster collaborative interactions, continuously realigning responses to bridge understanding gaps and enhance user experience.
					</p>
				  </VerticalTimelineElement>
				  
				  <VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(46, 139, 100)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(46, 139, 100)' }}
					date="2024 - Present"
					iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
					icon={<Star />}
				  >
					<h3 className="vertical-timeline-element-title">Software Lead</h3>	
					<h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>				
					<p>
					Leading group of undergraduates with the help of a mentor to develop the digital twin and business engagement platform for a sustainable bottling plant in the Bahamas.
					</p>
				  </VerticalTimelineElement>
				  
				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(30, 144, 255)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(30, 144, 255)' }}
					date="2024 - Present"
					iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
					icon={<Work/>}
				  >
					<h3 className="vertical-timeline-element-title">Paid Program Facilitator</h3>
					<h4 className="vertical-timeline-element-subtitle">Georgia Tech Grand Challenges</h4>
					<p>
					Drawing on my experience as a second-place winner in the Grand Challenges project, I oversee students and coaches while collaborating with professors to enhance the program and support students in developing impactful projects.
					</p>
				  </VerticalTimelineElement>
				  
				   <VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(150, 123, 182)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(150, 123, 182)' }}
					date="2023 - Present"
					iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
					icon={<School/>}
				  >
					<h3 className="vertical-timeline-element-title">Computer Science Student</h3>
					<h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>					
					<p>
					 Undergraduate student pursuing a B.S. in CS with a 4.0 GPA.
					 Data Structure & Algorithms, Object-Oriented Programming, Objects & Design, Computer Organization & Programming, Linear Algebra, Discrete Math
					</p>
				  </VerticalTimelineElement>
				  
				  				  
				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(103, 58, 183)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(103, 58, 183)' }}
					date="2020 - Present"
					iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
					icon={<Work/>}
				  >
					<h3 className="vertical-timeline-element-title">Chief Executive Officer</h3>
					<h4 className="vertical-timeline-element-subtitle">Candles by Korina</h4>
					<p>
					  Responsible for full business management including cost analysis, inventory management, marketing, production, and customer service. Earned bestseller title and 5-star reviews.
					</p>
				  </VerticalTimelineElement>
				    
				  				  
				  <VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(255, 10, 220)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(255, 10, 220)' }}
					date="2023"
					
					iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
					icon={<Work/>}
				  >
					<h3 className="vertical-timeline-element-title">Technical Intern</h3>
					<h4 className="vertical-timeline-element-subtitle">Westmoreland Mechanical Testing and Research</h4>
					<p>
					Conducted testing on various metals using LECO machines and analyzed microstructure with SEM microscopy. Applied metallography knowledge gained during internship to revise and improve company lab procedures.
					</p>
				  </VerticalTimelineElement>
				  
				   <VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: 'rgb(255, 105, 180)', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(255, 105, 180)' }}
					date="2021 - 2023"
					iconStyle={{ background: 'rgb(169, 169, 169)', color: '#fff' }}
					icon={<Star/>}
				  >
					<h3 className="vertical-timeline-element-title">Founder</h3>
					<h4 className="vertical-timeline-element-subtitle">Meet Your Neighbors</h4>					
					<p>
					Facilitated cultural global exchange, hosting events/service projects for over 100 members worldwide. Led meetings and managed team of 20, website, social media, and secured sponsorships from Hershey and ACEI.
					</p>
				  </VerticalTimelineElement>
				  
				  
			</VerticalTimeline>
		</Container>
	</div>

)
};

export default Experience;
