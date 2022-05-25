import React from 'react'
import ResumePic from '../screenshots/resume.png'
import ResumePdf from '../resume/ronnel-resume.pdf'

export default function Resume() {
    return (
        <div style={{ textAlign: 'center' }}>
            <a href={ResumePdf}><img style={{ maxWidth: '100%' }} src={ResumePic}></img></a>
            <br></br>
            <a href={ResumePdf}>My resume</a>
            <br></br>
            <br></br>
        </div>
    )
}