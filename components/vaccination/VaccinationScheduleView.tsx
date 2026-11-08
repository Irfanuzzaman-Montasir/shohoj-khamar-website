"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { VaccinationSchedule } from "@/lib/publicContent";
import { BookOpenCheck, ShieldAlert } from "lucide-react";

function isVerified(status: string) {
  return /verified|approved|যাচাইকৃত|অনুমোদিত/i.test(status);
}

export default function VaccinationScheduleView({
  schedules,
}: {
  schedules: VaccinationSchedule[];
}) {
  const { language } = useLanguage();
  const isBn = language === "bn";

  if (schedules.length === 0) {
    return (
      <section className="rounded-2xl border border-[#DFE7DE] bg-white p-8 sm:p-12 text-center">
        <BookOpenCheck className="mx-auto text-[#789080]" size={30} aria-hidden="true" />
        <h2 className="mt-4 text-lg font-bold text-[#1A4331]">
          {isBn ? "এখনো কোনো প্রকাশিত টিকার তথ্য নেই" : "No published vaccine schedules yet"}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#607567]">
          {isBn
            ? "তথ্য যোগ ও পর্যালোচনা শেষ হলে এখানে উৎস ও যাচাইয়ের অবস্থা-সহ দেখানো হবে।"
            : "Schedules will appear here with their source and review status after they are added and reviewed."}
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby="vaccine-list-title">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 id="vaccine-list-title" className="text-xl font-bold text-[#1A4331]">
            {isBn ? "প্রকাশিত টিকার তথ্য" : "Published schedule information"}
          </h2>
          <p className="mt-1 text-xs text-[#607567]">
            {schedules.length} {isBn ? "টি রেকর্ড" : schedules.length === 1 ? "record" : "records"}
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {schedules.map((schedule) => {
          const status = isBn ? schedule.reviewStatusBn : schedule.reviewStatusEn;
          const source = isBn
            ? schedule.sourceBn || schedule.sourceEn
            : schedule.sourceEn || schedule.sourceBn;
          const verified = isVerified(`${schedule.reviewStatusBn} ${schedule.reviewStatusEn}`);

          return (
            <article
              key={schedule.id}
              className="rounded-2xl border border-[#DFE7DE] bg-white p-5 sm:p-6 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-[#EDF2EB] px-3 py-1 text-xs font-bold text-[#365542]">
                  {schedule.birdSpecies}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                    verified
                      ? "bg-[#DFEDE1] text-[#1A4331]"
                      : "bg-[#FFF3D5] text-[#79570D]"
                  }`}
                >
                  {verified ? <BookOpenCheck size={14} /> : <ShieldAlert size={14} />}
                  {status || (isBn ? "পর্যালোচনাধীন" : "Under review")}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#1A4331]">
                {isBn ? schedule.vaccineNameBn : schedule.vaccineNameEn}
              </h3>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold text-[#728779]">
                    {isBn ? "লক্ষ্য রোগ" : "Target disease"}
                  </dt>
                  <dd className="mt-1 font-medium text-[#344D3E]">
                    {isBn ? schedule.targetDiseaseBn : schedule.targetDiseaseEn}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-[#728779]">
                    {isBn ? "প্রস্তাবিত বয়স" : "Recommended age"}
                  </dt>
                  <dd className="mt-1 font-medium text-[#344D3E]">
                    {isBn ? schedule.ageRecommendedBn : schedule.ageRecommendedEn}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold text-[#728779]">
                    {isBn ? "প্রয়োগ পদ্ধতি" : "Administration method"}
                  </dt>
                  <dd className="mt-1 font-medium text-[#344D3E]">
                    {isBn ? schedule.administrationMethodBn : schedule.administrationMethodEn}
                  </dd>
                </div>
              </dl>

              {(isBn ? schedule.instructionsBn : schedule.instructionsEn) && (
                <p className="mt-4 border-t border-[#EDF2EB] pt-3 text-sm leading-6 text-[#4F6658]">
                  {isBn ? schedule.instructionsBn : schedule.instructionsEn}
                </p>
              )}

              <div className="mt-4 border-t border-[#EDF2EB] pt-3 text-xs leading-5 text-[#607567]">
                <span className="font-bold text-[#405B4A]">{isBn ? "তথ্যসূত্র: " : "Source: "}</span>
                {source || (isBn ? "উৎস উল্লেখ করা হয়নি" : "No source provided")}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
