import {Request, Response} from "express";

export const createDevice = async (req: Request, res: Response) => {
    try {
        res.status(201).json({ message: "Device created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getDevices = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Devices retrieved successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getDevice = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Device retrieved successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const updateDevice = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Device updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const deleteDevice = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Device deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });     
    }
}