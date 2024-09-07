import React from 'react'
import ApplyHackathon from '@/components/ApplyHackathon';
import RemoveHackathon from '@/components/RemoveHackathon';

export default function HackCard(props: any) {
    const convertDate = (inputDate: string) => {
        const date = new Date(inputDate);
        const day = date.getUTCDate().toString().padStart(2, "0");
        const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
        const year = date.getUTCFullYear().toString();
        return `${day}/${month}/${year}`;
    };
    return (
        <div>
            <div className="form-container-card mx-auto mt-10 sm:w-[500px] w-[300px]">
                <form className="form">
                    <div className="heading">{props.name}</div>
                    <div className="input-hack">Deadline: {convertDate(props.deadline)}</div>
                    <div className="input-hack">Website: {props.link}</div>
                    <div className="input-hack">{props.description}</div>
                    <div className="flex space-x-2">
                        {props.isActive && <ApplyHackathon id={props.id} userEmail={props.userEmail} />}
                        {props.currentUserRole === "admin" && <RemoveHackathon id={props.id} />}
                    </div>
                </form>
            </div> 
        </div>
    )
}
