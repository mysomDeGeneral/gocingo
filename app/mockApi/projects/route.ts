import { NextResponse } from "next/server";
import mockProjects, { Project } from "@/data/projects";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit");

    let projects = mockProjects;

    if (limit) {
        projects = projects.slice(0, parseInt(limit));
    }

    return NextResponse.json(projects as Project[]);
}