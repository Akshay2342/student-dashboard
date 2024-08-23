import './Card.css'

export default function Card({ title, image }) {
    return (
        <div className="card-container">
            <div className="card">
                <img src={image} className="card-image" alt="" />
                <div className="card-content">
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    );
}
