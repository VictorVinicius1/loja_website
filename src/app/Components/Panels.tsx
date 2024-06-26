import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import SelectBar from "./SelectBar";
import CardsModel from "./CardsModel";
import { Grid } from "@mui/material";

interface AuxProps {
  menupeca: string;
}
export default function Panels({ menupeca }: AuxProps) {
  return (
    <>
      <div className="h-[63vh] w-[100vw] flex flex-row overflow-auto">
        <Box sx={{ width: "100%" }}>
          <TabContext value={menupeca}>
            <TabPanel className=" p-0 space-x-5 space-y-3 " value="1">
              <Grid container spacing={2}>
                  <CardsModel
                    parcelamento="6 x R$30 SEM JUROS"
                    valor="R$180,00"
                    descricao="Pulseira Pipoca 45cm"
                    urlimagem="/images/pulseira.png"
                  ></CardsModel>            
                  <CardsModel
                    parcelamento="6 x R$30 SEM JUROS"
                    valor="R$180,00"
                    descricao="Pulseira Pipoca 45cm"
                    urlimagem="/images/pulseira.png"
                  ></CardsModel>
                  <CardsModel
                    parcelamento="6 x R$30 SEM JUROS"
                    valor="R$180,00"
                    descricao="Pulseira Pipoca 45cm"
                    urlimagem="/images/pulseira.png"
                  ></CardsModel>
                  <CardsModel
                    parcelamento="6 x R$30 SEM JUROS"
                    valor="R$180,00"
                    descricao="Pulseira Pipoca 45cm"
                    urlimagem="/images/pulseira.png"
                  ></CardsModel>
                  <CardsModel
                    parcelamento="6 x R$30 SEM JUROS"
                    valor="R$180,00"
                    descricao="Pulseira Pipoca 45cm"
                    urlimagem="/images/pulseira.png"
                  ></CardsModel>
                  <CardsModel
                    parcelamento="6 x R$30 SEM JUROS"
                    valor="R$180,00"
                    descricao="Pulseira Pipoca 45cm"
                    urlimagem="/images/pulseira.png"
                  ></CardsModel>
                  <CardsModel
                    parcelamento="6 x R$30 SEM JUROS"
                    valor="R$180,00"
                    descricao="Pulseira Pipoca 45cm"
                    urlimagem="/images/pulseira.png"
                  ></CardsModel>
                
                
              </Grid>
              
            </TabPanel>
            <TabPanel className=" space-x-5" value="2"></TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}
