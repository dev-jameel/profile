import './divider.css';
import { services } from '../../constants';

const Divider = () => {
    return (
        <div className="divider">
            {['one', 'two'].map((lineClass) => (
                <div key={lineClass} className={`divider-line ${lineClass}`}>
                    <h2>
                        {services.map((service, index) => (
                            <>
                                <span key={service.title} className='divider-titles'>
                                    {service.title.toUpperCase()}
                                    {index < services.length - 1 && ' • '}
                                </span>
                                <span key={`${service.title}`} className='divider-titles'>
                                    {services[services.length - 1].title.toUpperCase()}
                                    {index < services.length - 1 && ' • '}
                                </span>
                            </>
                        ))}
                    </h2>
                </div>
            ))}
        </div>
    );
}

export default Divider;