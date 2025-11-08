import { type FamilyMember } from "../data/biodata";

interface Props {
    person: FamilyMember;
    highlight?: boolean;
}

export default function PersonCard({ person, highlight = false }: Props) {
    return (
        <div
            className={`group w-[95px] sm:w-[150px] py-2 sm:p-3 flex flex-col items-center justify-center text-center `}
        >
            {/* Profile Image */}
            <div className="relative w-[90px] h-[90px] sm:w-20 sm:h-20 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
            </div>

            {/* Info */}
            <div className="mt-2 sm:mt-3 leading-tight">
                <div className="font-semibold text-slate-800 text-[8px] sm:text-[10px] tracking-tight">
                    {person.name}
                </div>
                <div className="text-[7px] sm:text-[10px] text-blue-500 mt-0.5">
                    {person.occupation}
                </div>
                <div className="text-[6px] sm:text-[10px] text-slate-500 mt-0.5 italic">
                    {person.relation}
                </div>
            </div>

            {/* Glow for highlight */}
            {highlight && (
                <div className="absolute -z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl bg-indigo-400/20 animate-pulse"></div>
            )}
        </div>
    );
}
