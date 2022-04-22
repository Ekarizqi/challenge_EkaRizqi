import React from 'react';
import {
    Container, Col, Button, Label, Form, Input,
}from "reactstrap";

export default function Banner() {
    return (
        <div>
            <Container fluid 
                style={{
                    backgroundColor:"#F1F3FF",
                    width:"100%",
                    height:"260px"
                }}
            >
            </Container>
            <div style={{ display: "flex", position: "relative", justifyContent: "center" }}>
            <Container
                boxShadow={4}
                borderRadius={8}
                sx={{ flexGrow: 1 }}
                style={{ position:"absolute", top: "-56px", background: "white", width: "80%", display: "flex", padding: "10px", margin: "auto", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}
                >
                <Col elevation={0} spacing={1} style={{ margin: "10px" }}>
                    <Label style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Tipe Driver</Label>
                    <Form sx={{ m: 1 }} size="small" margin="dense" variant="outlined" style={{ borderRadius: 4, width: "200px", borderColor: "#5cb85f" }}>
                    <Input id="demo-customized-select-native">
                        <option value={10}>Dengan Sopir</option>
                        <option value={10}>Tanpa Sopir (Lepas Kunci)</option>
                    </Input>
                    </Form>
                </Col>
        
                <Col item xs style={{ margin: "10px" }}>
                    <Label style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Tanggal</Label>
                    <Input
                    fullWidth
                    size="small"
                    margin="dense"
                    color="success"
                    variant="outlined"
                    id="date"
                    type="date"
                    defaultValue={new Date()}
                    sx={{ width: 200 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                </Col>
        
                <Col item xs style={{ margin: "10px" }}>
                    <Label style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Waktu Jemput/ Ambil</Label>
                    <Input
                    fullWidth
                    size="small"
                    margin="dense"
                    variant="outlined"
                    id="time"
                    type="time"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300,
                    }}
                    sx={{ width: 220 }}
                    />
                </Col>
        
                <Col item xs style={{ margin: "10px" }}>
                    <Label style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Jumlah Penumpang (Optional)</Label>
                    <Input
                    fullWidth
                    size="small"
                    margin="dense"
                    variant="outlined"
                    id="outlined-number"
                    defaultValue="0"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ input: { color: "yellow" }, label: { color: "blue" } }}
                    />
                </Col>
        
                <Col>
                    <Button href={`/`} color="info"
                    outline
                    style={{
                        justifyContent: "center", marginTop: "42px", marginRight: "5px"}}>
                    Edit
                    </Button>
                </Col>
                </Container>
                </div>
        </div>
    );
}

