import { Button, Card } from "react-bootstrap";

import styles from '../styles/product.module.css'
export default function ProductCard() {
    const title = "OS Track"
    return (
        <>
            {/* jsx == js */}
            <Card className="col-4">

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className={`${styles.info}`}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <p className={styles.subInfo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quidem itaque iste quo laboriosam cumque id quae vitae adipisci ducimus optio maiores, libero aperiam aspernatur reiciendis nam corporis ex nemo.</p>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}
