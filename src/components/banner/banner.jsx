import React, { Component } from 'react'

import './banner.scss'

import autumn from '../../assets/banner/autumn.jpg';
import winter from '../../assets/banner/winter.jpg';
import TreeWinter from '../../assets/banner/tree-winter.png';
import TreeAutumn from '../../assets/banner/tree-autumn.png';
import window from '../../assets/banner/window.png';
import night from '../../assets/banner/night.mp4';

const data_images = [
    { x: 0, b: 0, o: 1 },
    { x: 0, b: 0, o: 1 },
    { x: 0, b: 0, o: 0 },
    { x: 0, b: 0, o: 0 },
    { x: 0, b: 2, o: 0 },
    { x: 0, b: 2, o: 1 },
]
export default class Banner extends Component {
    state = {
        x: 0,
        x_new: 0,
        x_offset: 0,
        images: [],
        data_images: [],
        step: ""
    }
    handleMouseMove = e => {

        const { x, images, step } = this.state
        const x_offset = x - e.clientX
        const o = 1 / 550
        let opacity = Math.abs(x_offset * o) >= 1 ? 1 : Math.abs(x_offset * o)

        // console.log(x_offset)
        // console.log(opacity)
        // console.log(1-opacity)
        const level = 15
        const level_tree = 10
        const l_new_tree = 0 - (x_offset / level_tree)
        const l_new = 0 - (x_offset / level)
        for (const key in images) {
            if (images.hasOwnProperty(key)) {
                // const level = (3 - parseInt(key)) * 8
                const element = images[key].children[0];
                const element_data = data_images[key];
                // let b_new = Math.abs(element_data.b + (x_offset / step))
                if (x_offset < 0) {
                    element.style = `transform:translate(${l_new}px) scale(1);filter:blur(${element_data.b}px);opacity:${element_data.o}`
                    if (key == 2) element.style = `transform:translate(${l_new}px) scale(1);filter:blur(${element_data.b}px);opacity:${opacity}`
                    if (key == 5) element.style = `transform:translate(${l_new_tree}px) scale(1);filter:blur(${element_data.b}px);opacity:${element_data.o}`
                    if (x_offset <= -600) {
                        const op = Math.abs((x_offset + 600) * (1 / 400))
                        if (key == 3) element.style = `transform:translate(${l_new}px) scale(1);filter:blur(${element_data.b}px);opacity:${op}`
                    }
                }
                if (x_offset > 0) {
                    element.style = `transform:translate(${l_new}px) scale(1);filter:blur(${element_data.b}px);opacity:${element_data.o}`
                    if (key == 1) element.style = `transform:translate(${l_new}px) scale(1);filter:blur(${element_data.b}px);opacity:${1 - opacity}`

                    if (key == 5) element.style = `transform:translate(${l_new_tree}px) scale(1);filter:blur(${element_data.b}px);opacity:${1 - opacity}`

                    if (key == 4) element.style = `transform:translate(${l_new_tree}px) scale(1);filter:blur(${element_data.b}px);opacity:${opacity}`

                }
            }
        }

    }
    handleMouseOver = e => {
        this.setState({
            x: e.clientX,
        })
    }
    handleMouseOut = () => {
        const { images } = this.state
        this.init(images)
    }

    init = (images) => {
        for (const i in images) {
            if (images.hasOwnProperty(i)) {
                const element = images[i];
                const element_data = data_images[i]
                element.children[0].style = `transition:.2s;transform:translate(${element_data.x}px) scale(1);filter:blur(${element_data.b}px);opacity:${element_data.o}`
            }
        }
    }
    componentDidMount() {
        const images = document.querySelectorAll('.layer')
        const window_width = document.documentElement.clientWidth
        const step = window_width / 2 / 4
        this.setState({
            images,
            step
        })
        this.init(images)
    }

    render() {
        console.log(this.state)
        return (
            <div id='banner' onMouseMove={this.handleMouseMove} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>

                <div className='layer'>
                    <img src={winter} alt="" width='3000' height='231' />
                </div>
                <div className='layer'>
                    <img src={autumn} alt="" width='3000' height='231' />
                </div>
                <div className='layer'>
                    <video src={night} width='3000' height='231' loop autoPlay />
                </div>
                <div className='layer'>
                    <img src={window} alt="" width='3000' height='231' />
                </div>
                <div className='layer'>
                    <img src={TreeWinter} alt="" width='3000' height='231' />
                </div>
                <div className='layer'>
                    <img src={TreeAutumn} alt="" width='3000' height='231' />
                </div>

            </div>
        )
    }
}