import React from "react";
import { FileText, Download, ShieldCheck } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MandatoryDisclosurePage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mandatory Disclosure</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Statutory information as per the requirement of the Central Board of Secondary Education (CBSE).
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 space-y-16">
          {/* A. General Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <ShieldCheck className="text-secondary" />
              A. General Information
            </h2>
            <Table className="border">
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="w-16">S.No</TableHead>
                  <TableHead>Information</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell className="font-medium">Name of the School</TableCell>
                  <TableCell>Maria Mata Convent High School</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell className="font-medium">Affiliation No. (if applicable)</TableCell>
                  <TableCell>XXXXXX</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell className="font-medium">School Code (if applicable)</TableCell>
                  <TableCell>XXXXX</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell className="font-medium">Complete Address with Pin Code</TableCell>
                  <TableCell>Chhatarpur, Madhya Pradesh - 471001</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5</TableCell>
                  <TableCell className="font-medium">Principal Name & Qualification</TableCell>
                  <TableCell>Sr. Mary Joseph, M.A., B.Ed.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>6</TableCell>
                  <TableCell className="font-medium">School Email ID</TableCell>
                  <TableCell>info@mmcshschool.edu.in</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* B. Documents & Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <ShieldCheck className="text-secondary" />
              B. Documents & Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DocLink title="Affiliation/Extension Letter" />
              <DocLink title="Trust/Society/Company Registration" />
              <DocLink title="No Objection Certificate (NOC)" />
              <DocLink title="Recognition Certificate" />
              <DocLink title="Building Safety Certificate" />
              <DocLink title="Fire Safety Certificate" />
              <DocLink title="DEO Certificate" />
              <DocLink title="Water, Health & Sanitation Certificates" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DocLink({ title }: { title: string }) {
  return (
    <Card className="hover:border-secondary transition-colors cursor-pointer group shadow-sm">
      <CardContent className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/5 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
            <FileText className="h-5 w-5" />
          </div>
          <span className="font-medium text-sm text-primary">{title}</span>
        </div>
        <Download className="h-4 w-4 text-slate-400 group-hover:text-secondary" />
      </CardContent>
    </Card>
  );
}
