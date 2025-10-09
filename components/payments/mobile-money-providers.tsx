"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Smartphone, CreditCard } from "lucide-react"
import { MobileMoneyProvider } from "@/lib/types/african-marketplace"

const mobileMoneyProviders: MobileMoneyProvider[] = [
  {
    id: "mpamba",
    name: "Mpamba",
    code: "MP",
    icon: "M",
    color: "bg-blue-600",
    supported: true,
    fees: {
      percentage: 0.5,
      minimum: 50,
      maximum: 5000
    }
  },
  {
    id: "airtel_money",
    name: "Airtel Money",
    code: "AM",
    icon: "A",
    color: "bg-red-600",
    supported: true,
    fees: {
      percentage: 0.5,
      minimum: 50,
      maximum: 5000
    }
  },
  {
    id: "tnm_mobile_money",
    name: "TNM Mobile Money",
    code: "TNM",
    icon: "T",
    color: "bg-green-600",
    supported: true,
    fees: {
      percentage: 0.5,
      minimum: 50,
      maximum: 5000
    }
  },
  {
    id: "mpesa",
    name: "M-Pesa",
    code: "MPESA",
    icon: "M",
    color: "bg-green-500",
    supported: false, // Not available in Malawi
    fees: {
      percentage: 0,
      minimum: 0,
      maximum: 0
    }
  }
]

interface MobileMoneyProvidersProps {
  selectedProvider?: string
  onSelectProvider: (provider: MobileMoneyProvider) => void
  amount?: number
  showFees?: boolean
}

export function MobileMoneyProviders({ 
  selectedProvider, 
  onSelectProvider, 
  amount = 0,
  showFees = true 
}: MobileMoneyProvidersProps) {
  const calculateFees = (provider: MobileMoneyProvider, amount: number) => {
    const fee = Math.max(provider.fees.minimum, amount * (provider.fees.percentage / 100))
    return Math.min(fee, provider.fees.maximum)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Smartphone className="h-5 w-5 text-primary" />
        <h3 className="font-semibold">Mobile Money Payment</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {mobileMoneyProviders.map((provider) => {
          const isSelected = selectedProvider === provider.id
          const isSupported = provider.supported
          const fees = showFees && amount > 0 ? calculateFees(provider, amount) : 0
          const total = amount + fees

          return (
            <Card 
              key={provider.id} 
              className={`cursor-pointer transition-all hover:shadow-md ${
                isSelected ? 'ring-2 ring-primary' : ''
              } ${!isSupported ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => isSupported && onSelectProvider(provider)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${provider.color} flex items-center justify-center text-white font-bold`}>
                    {provider.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{provider.name}</h4>
                      {isSelected && <CheckCircle className="h-4 w-4 text-primary" />}
                      {!isSupported && (
                        <Badge variant="outline" className="text-xs">
                          Not Available
                        </Badge>
                      )}
                    </div>
                    
                    {showFees && amount > 0 && isSupported && (
                      <div className="text-sm text-muted-foreground mt-1">
                        <div>Fee: MWK {fees.toLocaleString()}</div>
                        <div className="font-medium">Total: MWK {total.toLocaleString()}</div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Traditional Payment Methods */}
      <div className="pt-4 border-t">
        <div className="flex items-center gap-2 mb-3">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <h4 className="font-medium text-sm text-muted-foreground">Other Payment Methods</h4>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-12 flex-col gap-1">
            <CreditCard className="h-4 w-4" />
            <span className="text-xs">Bank Transfer</span>
          </Button>
          
          <Button variant="outline" className="h-12 flex-col gap-1">
            <CheckCircle className="h-4 w-4" />
            <span className="text-xs">Cash on Delivery</span>
          </Button>
        </div>
      </div>

      {/* Security Notice */}
      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-start gap-2">
          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-medium text-green-800">Secure Payment</p>
            <p className="text-green-700">
              All mobile money transactions are encrypted and secure. Your money is protected with escrow until work is completed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
