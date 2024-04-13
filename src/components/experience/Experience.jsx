import './experience.css';
import { experiences } from '../../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
        <div className="experiences-container">
            <div className="experiences-content">
                <abbr>Experience</abbr>
                <h1>Recent Work Experience</h1>
            </div>
            <div className='experiences-list'>
                <VerticalTimeline>
                    {experiences.map((experience) => (
                        <VerticalTimelineElement key={experience.id} className='vertical-timeline-element--work'
                            contentStyle={{
                                background: "#2b2b2b90",
                                color: "#fff",
                                borderRadius: "12px",
                                boxShadow: "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)"
                            }}
                            contentArrowStyle={{ borderRight: "8px solid  #2b2b2b90" }}
                            iconStyle={{ background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            dateClassName='timeline-date'
                            icon={<img src={experience.icon} alt={experience.company_name} width="40px" />}
                            date={experience.date}>
                            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{experience.company_name} &nbsp;-&nbsp; {experience.location}</h5>
                            {experience.points.map((point, index) => (
                                <p key={`experience-point-${index}`} className='points'>{point}</p>
                            ))}
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Experience;