import React from 'react';
import { JavaScriptOutlined } from '@ant-design/icons';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";


export const skills = [
    {
        name: 'Javascript',
        logo: React.createElement(IoLogoJavascript),
        experience: '2 year'
    },
    {
        name: 'React JS',
        logo: React.createElement(FaReact),
        experience: '1 year'
    },
    {
        name: 'Tailwind CSS',
        logo: React.createElement(RiTailwindCssFill),
        experience: '1 year'
    },
    {
        name: 'TypeScript',
        logo: React.createElement(BiLogoTypescript),
        experience: '1 year'
    },
    {
        name: 'Antd',
        logo: React.createElement(AiOutlineAntDesign),
        experience: '1 year'
    },
    {
        name: 'Figma',
        logo: React.createElement(FaFigma),
        experience: '1 year'
    },
    {
        name: 'MongoDB',
        logo: React.createElement(SiMongodb),
        experience: '1/2 year'
    },
    {
        name: 'Git Source Control',
        logo: React.createElement(FaGithub),
        experience: '2 year'
    },
    {
        name: 'MySQL',
        logo: React.createElement(GrMysql),
        experience: '1/2 year'
    }
]

export const portfolio = [
    {
        name: 'HOMA2U',
        link: 'https://shop.homa2u.com/en',
        info: 'Develop the UI from scratch, mostly focus on frontend',
        image: '/homa.jpg'
    },
    {
        name: 'SHIPX',
        link: 'https://shipx.cc/auth/sign-in',
        info: 'Develop new feature, bug fixes, focus more on functionality rather than UI',
        image: '/swift.jpg'
    }
]

export const sideProject = [
    {
        name: 'Portfolio Website',
        link: '',
        info: '',
        image: ''
    },
    {
        name: 'GPS Tracker',
        link: '',
        info: '',
        image: ''
    },
    {
        name: 'Calculator',
        link: '',
        info: '',
        image: ''
    },
    {
        name: 'Weather App',
        link: '',
        info: '',
        image: ''
    }
]