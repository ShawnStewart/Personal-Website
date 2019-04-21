import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

import "./Updating.css";

const stars = [];

export default class Updating extends Component {
    componentDidMount() {
        this.canvas = document.getElementById("UpdatingCanvas");
        this.initCanvas();

        // window.addEventListener("resize", this.handleWindowResize);
    }

    initCanvas = () => {
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = window.screen.availWidth;
        this.canvas.height = window.screen.availHeight;

        this.generateStars();

        window.requestAnimationFrame(this.update);
    };

    generateStars = () => {
        const cw = this.canvas.width;
        const ch = this.canvas.height;

        for (let i = 0; i < 4000; i++) {
            let randX = Math.floor(Math.random() * cw);
            let randY = Math.floor(Math.random() * ch);
            let randSize = Math.floor(Math.random() * 1 + 1);
            let randOpacityOne = Math.floor(Math.random() * 9 + 1);
            let randOpacityTwo = Math.floor(Math.random() * 9 + 1);
            let randHue = Math.floor(Math.random() * 360 + 1);

            stars.push({
                randHue,
                randOpacity: randOpacityOne + randOpacityTwo,
                randX,
                randY,
                randSize,
            });
        }
    };

    update = () => {
        for (let i = 0; i < stars.length; i++) {
            stars[i].randX =
                stars[i].randX > this.canvas.width ? 0 : stars[i].randX + 0.25;

            stars[i].randY =
                stars[i].randY > this.canvas.height ? 0 : stars[i].randY + 0.4;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        window.requestAnimationFrame(this.update);
    };

    draw = () => {
        for (let i = 0; i < stars.length; i++) {
            const { randHue, randOpacity, randX, randY, randSize } = stars[i];
            if (randSize > 1) {
                this.ctx.shadowBlur = Math.floor(Math.random() * 15 + 5);
                this.ctx.shadowColor = "white";
            }

            this.ctx.fillStyle =
                "hsla(" + randHue + ", 30%, 80%, ." + randOpacity + ")";
            this.ctx.fillRect(randX, randY, randSize, randSize);
        }
    };

    handleWindowResize = () => {
        this.canvas.width = window.screen.availWidth;
        this.canvas.height = window.screen.availHeight;
    };

    render() {
        return (
            <div id="UpdatingContainer">
                <canvas id="UpdatingCanvas" />
                <div id="UpdatingText">
                    <h1>
                        Currently under construct-shawn
                        <span role="img" aria-label="construction worker emoji">
                            👷‍♂️
                        </span>
                    </h1>
                    <p>
                        I'm working on updating my site, but feel free to check
                        out my <a href="/legacy">legacy site</a>
                    </p>
                    <ul id="iconList">
                        <li>
                            <a
                                href="https://github.com/shawnstewart"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name="github" size="big" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/shawn-stewart/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name="linkedin" size="big" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/integrashawn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name="twitter" size="big" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
