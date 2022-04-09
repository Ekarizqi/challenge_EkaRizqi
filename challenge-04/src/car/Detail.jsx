import React from 'react'
import {Row, Card, CardBody, CardTitle, CardSubtitle,CardText, CardImg, Button, Container} from 'reactstrap'
import { useParams } from 'react-router-dom';


export default function Detail ({detail}) {
    let params = useParams();
    // let detail = (parseInt(params.DetailId, 10));
    return (
        <div>
            Detail: {params.DetailId}
            <Container><Row>
             <Card>
                <CardBody>
                <CardTitle tag="h5">
                    Tentang Paket
                </CardTitle>
                <CardSubtitle
                    tag="h6"
                >
                    Include
                </CardSubtitle>
                <CardText>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li> 
                    <li>Sudah termasuk Tiket Wisata</li> 
                    <li> Sudah termasuk pajak</li> 
                </CardText>
                <CardSubtitle
                    tag="h6"
                >
                    Exclude
                </CardSubtitle>
                <CardText>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                    <li>Tidak termasuk akomodasi penginapan</li> 
                </CardText>
                <CardTitle tag="h5">
                    Refund, Reschedule, Overtime
                </CardTitle>
                <CardText>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                    <li>Tidak termasuk akomodasi penginapan</li> 
                </CardText>
                <Button color="success"
                    href="#">
                    Lanjutkan Pembayaran
                </Button>
                </CardBody>
            </Card>
                {detail.map((car) => (
                 <Card>
                     <CardBody>
                     <CardImg
                        alt="Card image cap"
                        src={car.image}
                        top
                        width="100%"
                      />
                     <CardTitle tag="h6">
                        {car.name} / {car.category}
                     </CardTitle>
                     <CardTitle tag="h5">
                        Rp {car.price} / hari 
                     </CardTitle>
                     <CardText>
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </CardText>
                     <CardText>
                        Manual
                     </CardText>
                     <Button block color="success"
                     href="#">
                         Lanjutkan Pembayaran
                     </Button>
                     </CardBody>
                 </Card>
                ))}
            </Row></Container>
        </div>
    );
};
