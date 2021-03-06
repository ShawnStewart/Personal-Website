import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Table, Input } from "semantic-ui-react";
import axios from "axios";
import Header from "../../Header/Header";
import "./Hiscores.css";

export default class Hiscores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount = () => {
        axios
            .get(
                `${
                    process.env.REACT_APP_URL
                }/api/projects/sliding-puzzle/hiscores`,
            )
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="Hiscores">
                <Header main={"Sliding Puzzle Hiscores"} />
                <div className="Hiscores__Body">
                    <Container>
                        <div className="Hiscores__Menu">
                            <Link
                                to="/legacy/projects/sliding-puzzle"
                                onClick={() => {
                                    document
                                        .querySelector(".Header")
                                        .scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                }}
                            >
                                <Button
                                    icon="arrow alternate circle left outline"
                                    content="Back"
                                    color="teal"
                                />
                            </Link>
                            <Input icon="search" disabled />
                        </div>
                        <Table celled sortable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>#</Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Username
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Time (s)
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>Moves</Table.HeaderCell>
                                    <Table.HeaderCell>Picture</Table.HeaderCell>
                                    <Table.HeaderCell>Date</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {this.state.data.map(elem => {
                                    const d = new Date(elem.created_on);
                                    return (
                                        <Table.Row key={elem.id}>
                                            <Table.Cell>{elem.rank}</Table.Cell>
                                            <Table.Cell>
                                                {elem.username}
                                            </Table.Cell>
                                            <Table.Cell>{elem.time}</Table.Cell>
                                            <Table.Cell>
                                                {elem.moves}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {elem.picture}
                                            </Table.Cell>
                                            <Table.Cell>{`${d.getMonth() +
                                                1}-${d.getDate() +
                                                1}-${d.getFullYear()}`}</Table.Cell>
                                        </Table.Row>
                                    );
                                })}
                            </Table.Body>
                        </Table>
                    </Container>
                </div>
            </div>
        );
    }
}
