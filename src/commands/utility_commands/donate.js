// -----------------
// Global variables
// -----------------

// Codebeat:disable[LOC,ABC,BLOCK_NESTING,ARITY]
const sendMessage = require("../../core/command.send");

// ------------------------------
// Donate varible command handalr
// ------------------------------

function donate (data)
{

   const commandVariable1 = data.cmd.params.split(" ")[0].toLowerCase();

   if (commandVariable1 === "github")
   {

      // console.log(`DEBUG: donate ${commandVariable1}`);
      {

         const outputgh =
            "**```Donate via github```**\n" +
            `Thank you for wanting to donate to the Evil Translate Bot Project \n` +
            `https://github.com/sponsors/RitaBot-Project\n\n`;
         data.color = "info";
         data.text = outputgh;

         // -------------
         // Send message
         // -------------

         return sendMessage(data);

      }

   }
   else if (commandVariable1 === "oc")
   {

      // console.log(`DEBUG: donate ${commandVariable1}`);
      {

         const outputoc =
            "**```Donate via github```**\n" +
            `Thank you for wanting to donate to the Evil Translate Bot Project \n` +
            `https://github.com/pouyaSamie/Evil-Translate-for-Discord-Based-on-Rita\n\n`;
         data.color = "info";
         data.text = outputoc;

         // -------------
         // Send message
         // -------------

         return sendMessage(data);

      }

   }

   data.color = "error";
   data.text =
      `:warning:  **\`${commandVariable1
      }\`** is not a valid donate option.\n`;

   // -------------
   // Send message
   // -------------

   return sendMessage(data);

}

// -------------
// Command Code
// -------------

module.exports = function run (data)
{

   // -----------------------------------
   // Error if settings param is missing
   // -----------------------------------

   if (!data.cmd.params)
   {

      data.color = "info";
      data.text =
         "Thank you for wanting to donate to the Evil Translate Bot Project \n" +
         "You can donate via the Open Collective \n" +
         "or via GitHub Sponsors \n" +
         `https://github.com/pouyaSamie/Evil-Translate-for-Discord-Based-on-Rita\n\n`;

      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   }

   // ----------------
   // Execute setting
   // ----------------

   return donate(data);

};
