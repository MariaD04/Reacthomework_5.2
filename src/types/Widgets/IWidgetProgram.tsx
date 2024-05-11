interface IProgramListItem {
    time?: string;
    name: string;
    channel: string;
}

interface IProgram {
   items: IProgramListItem[]; 
}